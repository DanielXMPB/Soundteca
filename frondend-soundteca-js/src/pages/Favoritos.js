import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlay, faListUl } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import APIInvoke from "../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Favoritos = () => {

    const cargarUser = async () => {
        const data = {
            "_id": usuario._id
        }
        const response = await APIInvoke.invokePOST(`/listarPorId`, data);
        const datos = JSON.stringify(response.data);
        localStorage.setItem('data', datos);
        const datosJSON = JSON.parse(datos);
        setUsuario(datosJSON['0']);
        cargarCanciones();
    }

    // Cargar Usuario
    const [usuario, setUsuario] = useState({});

    const getData = () => {
        const json = localStorage.getItem('data');
        const datos = JSON.parse(json);
        if (datos) {
            setUsuario(datos[0]);
        }
    }

    // Cargar Lista
    const [cancionesFavoritas, setCancionesFavoritas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cargarCanciones = async () => {
        console.log(usuario._id)
        const data = {
            "id_usuario": usuario._id
        }
        const response = await APIInvoke.invokePOST(`/listarFavoritos`, data);
        setCancionesFavoritas(response.data)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cancionesFavoritas.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
        const pageNumbers = Math.ceil(cancionesFavoritas.length / itemsPerPage);
        return (
            <ul className="pagination pagination-sm m-0 float-right">
                {Array.from(Array(pageNumbers), (el, index) => {
                    const pageNumber = index + 1;
                    return (
                        <li className="page-item" key={index}>
                            <Link className="page-link" href="#" onClick={() => handlePageChange(pageNumber)}>
                                {pageNumber}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (usuario._id) {
            cargarCanciones();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario]);

    const eliminarFavorito = async (e, idCancion, idUsuario) => {
        e.preventDefault();
        const data = {
            "id_usuario": idUsuario,
            "id_cancion": idCancion
        }
        const response = await APIInvoke.invokePUT(`/removeFavorite`, data);
        if (response.message === 'Correcto') {
            const msg = "Se ha agregado correctamente";
            swal({
                title: "Information",
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'ok',
                        value: true,
                        visible: true,
                        className: 'btn-danger',
                        closeModal: true
                    }
                }
            });
            cargarUser();
        } else {
            const msg = "No se pudo agregar";
            swal({
                title: "Error",
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'ok',
                        value: true,
                        visible: true,

                        className: 'btn-danger',
                        closeModal: true
                    }
                }
            })
        }
    }

    return (
        <div className="dark-mode">
            <div className="wrapper">
                <Navbar></Navbar>
                <Sidebar
                    nombre = {usuario.nombre}
                />
                <div className="content-wrapper">
                    <section className="content">
                        <div className="card-body">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Canciones Favoritas</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead style={{ display: 'none' }}>
                                            <tr>
                                                <th style={{ width: '0%' }}></th>
                                                <th style={{ width: '2%' }}></th>
                                                <th style={{ width: '2%' }}></th>
                                                <th style={{ width: '2%' }}></th>
                                                <th style={{ width: '2%' }}></th>
                                                <th style={{ width: '0%' }}></th>
                                                <th style={{ width: '0%' }}></th>
                                                <th style={{ width: '0%' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentItems.map(
                                                    item =>
                                                        <tr key={item._id}>
                                                            <td className="align-middle">
                                                                <img src={item.portada} alt="Portada de la canción" className="img-fluid" style={{ maxWidth: "80px" }} />
                                                            </td>
                                                            <td className="align-middle">{item.nombre}</td>
                                                            <td className="align-middle">{item.album}</td>
                                                            <td className="align-middle">
                                                                {
                                                                    item.genero.map((genero, index) => (
                                                                        <span key={index}>{genero}<br /></span>
                                                                    ))
                                                                }
                                                            </td>
                                                            <td className="align-middle">
                                                                {
                                                                    item.artistas.map((artista, index) => (
                                                                        <span key={index}>{artista}<br /></span>
                                                                    ))
                                                                }
                                                            </td>
                                                            <td className="align-middle">
                                                                <button type="button" className="btn btn-success">
                                                                    <FontAwesomeIcon icon={faPlay} />
                                                                </button>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button onClick={(e) => eliminarFavorito(e, item._id, usuario._id)}
                                                                type="button" className="btn btn-danger">
                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                </button>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button type="button" className="btn btn-primary">
                                                                    <FontAwesomeIcon icon={faListUl} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer clearfix">
                                    <ul className="pagination pagination-sm m-0 float-right">
                                        {renderPageNumbers()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Favoritos;