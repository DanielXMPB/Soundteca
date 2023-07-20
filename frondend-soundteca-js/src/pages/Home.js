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
import ModalReproducir from "../components/ModalReproducir";
import SearchNombre from "../components/SearchNombre";
import SearchArtista from "../components/SearchArtista";

const Home = () => {

    // Cargar Usuario
    const [usuario, setUsuario] = useState({});
    const [playlist, setPlaylist] = useState([]);

    const getData = async () => {
        const json = localStorage.getItem('data');
        const datos = JSON.parse(json);
        if (datos) {
            setUsuario(datos['0']);
            const data = {
                "_id": datos['0']._id
            }
            const response1 = await APIInvoke.invokePOST(`/listarPlaylist`, data);
            setPlaylist(response1.data)
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

    const [cancionAgregar, setCancionAgregar] = useState({});

    const agregarCancion = (e, idCancion) => {
        e.preventDefault();
        setCancionAgregar(idCancion)
    }

    const [reprucionActual, setReprucionActual] = useState({
        artistas: ["", ""]
    });

    const agregarReproduccion = (e, cancion) => {
        e.preventDefault();
        setReprucionActual(cancion)
    }


    // buscar por nombre
    const [nombreCancion, setNombreCancion] = useState({
        nombre: '',
    });

    const { nombre } = nombreCancion;

    const onChangeBuscarNombre = (e) => {
        setNombreCancion({
            ...nombreCancion,
            [e.target.name]: e.target.value
        })
    }

    const buscarNombre = async () => {
        const response = await APIInvoke.invokeGET(`/listarCancion/nombre/` + nombreCancion.nombre);
        const mensaje = response.message;
        if (mensaje === 'Correcto') {
            setCanciones(response.data)
        }
    }

    const onSubmitNombre = (e) => {
        e.preventDefault();
        buscarNombre();
    }

    // buscar por autor
    const [autorCancion, setAutorCancion] = useState({
        autor: '',
    });

    const { autor } = autorCancion;

    const onChangeBuscarAutor = (e) => {
        setAutorCancion({
            ...autorCancion,
            [e.target.name]: e.target.value
        })
    }

    const buscarAutor = async () => {
        const response = await APIInvoke.invokeGET(`/listarCancion/artista/` + autorCancion.autor);
        const mensaje = response.message;
        if (mensaje === 'Correcto') {
            setCanciones(response.data)
        }
    }

    const onSubmitAutor = (e) => {
        e.preventDefault();
        buscarAutor();
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
                                <div className="card-header" style={{ display: 'flex' }}>
                                    <h3 className="card-title" style={{ marginRight: '25px' }}>Todas las canciones</h3>
                                    <SearchArtista
                                        onSubmitAutor={onSubmitAutor}
                                        autor={autor}
                                        onChangeBuscarAutor={onChangeBuscarAutor}
                                    />
                                    <SearchNombre
                                        onSubmitNombre={onSubmitNombre}
                                        nombre={nombre}
                                        onChangeBuscarNombre={onChangeBuscarNombre}
                                    />
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
                                                                <button onClick={(e) => agregarReproduccion(e, item)}
                                                                    data-toggle="modal" data-target="#modalReproduciir"
                                                                    type="button" className="btn btn-success">
                                                                    <FontAwesomeIcon icon={faPlay} />
                                                                </button>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button onClick={(e) => agregarFavorito(e, item._id, usuario._id)}
                                                                    type="button" className="btn btn-danger">
                                                                    <FontAwesomeIcon icon={faHeart} />
                                                                </button>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button onClick={(e) => agregarCancion(e, item._id)}
                                                                    data-toggle="modal" data-target="#exampleModal"
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
                    playlist={playlist}
                    cancionAgregar={cancionAgregar}
                />
                <ModalReproducir
                    reproduccion={reprucionActual}
                />
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Home;