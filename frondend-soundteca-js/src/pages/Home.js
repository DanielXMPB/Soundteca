/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faListUl } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import APIInvoke from "../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Modal from '../components/Modal';

const Home = () => {

    // Cargar Usuario
    const [usuario, setUsuario] = useState({});
    const [playlist, setPlaylist] = useState([]);

    const getData = () => {
        const json = localStorage.getItem('data');
        const datos = JSON.parse(json);
        if (datos) {
            setUsuario(datos['0']);
            setPlaylist(datos['0'].playlist)
        }
    }

    // Cargar Lista
    const [canciones, setCanciones] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    const cargarCanciones = async (pagina, cantidad) => {
        const response = await APIInvoke.invokeGET(`/listarCancion`);
        setCanciones(response.data)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = canciones.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
        const pageNumbers = Math.ceil(canciones.length / itemsPerPage);
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

    // Se carga al inicio de la pagina
    useEffect(() => {
        cargarCanciones();
        getData();
    }, [])

    const agregarFavorito = async (e, idCancion, idUsuario) => {
        e.preventDefault();
        const data = {
            "id_usuario": idUsuario,
            "id_cancion": idCancion
        }
        const response = await APIInvoke.invokePUT(`/addFavoritos`, data);
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
                    nombre={usuario.nombre}
                />
                <div className="content-wrapper">
                    <section className="content">
                        <div className="card-body">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Todas las canciones</h3>
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
                                                                <Link
                                                                    to={`/reproductor?cancionActual=${item._id}`}>
                                                                    <button type="button" className="btn btn-success">
                                                                        <FontAwesomeIcon icon={faPlay} />
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button onClick={(e) => agregarFavorito(e, item._id, usuario._id)}
                                                                    type="button" className="btn btn-danger">
                                                                    <FontAwesomeIcon icon={faHeart} />
                                                                </button>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button data-toggle="modal" data-target="#exampleModal"
                                                                    type="button" className="btn btn-primary">
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
                <Modal
                    playlist = {playlist}
                />
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;