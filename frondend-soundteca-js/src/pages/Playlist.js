import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import APIInvoke from "../utils/APIInvoke";
import { Link } from "react-router-dom";
import ModalPlaylist from "../components/ModalPlaylist";

const Playlist = () => {

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
    const [playlist, setPlaylist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cargarPlaylist = async () => {
        const data = {
            "_id": usuario._id
        }
        const response = await APIInvoke.invokePOST(`/listarPlaylist`, data);
        setPlaylist(response.data)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = playlist.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
        const pageNumbers = Math.ceil(playlist.length / itemsPerPage);
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
            cargarPlaylist();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuario]);

    const [listaActual, setListaActual] = useState([])
    const [idListaActual, setIdListaActual] = useState([])

    const agregarlistaActual = async (e, idPlaylist) => {
        e.preventDefault();
        setIdListaActual(idPlaylist)
        const data = {
            id_playlist: idPlaylist
        }
        const response = await APIInvoke.invokePOST(`/listsarCancionesPlaylist`, data)
        setListaActual(response.data)
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
                                    <h3 className="card-title">Todas las Playlist</h3>
                                </div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead style={{ display: 'none' }}>
                                            <tr>
                                                <th style={{ width: '0%' }}></th>
                                                <th style={{ width: '50%' }}></th>
                                                <th style={{ width: '50%' }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentItems.map(
                                                    (item, index) =>
                                                        <tr key={index}>
                                                            <td className="align-middle">
                                                                <img src={item.portada} alt="Portada de la canción" className="img-fluid" style={{ maxWidth: "80px" }} />
                                                            </td>
                                                            <td className="align-middle">{item.nombre}</td>
                                                            <td className="align-middle">
                                                                <button onClick={(e) => agregarlistaActual(e, item._id)}
                                                                    data-toggle="modal" data-target="#modalPlaylist"
                                                                    type="button" className="btn btn-success">
                                                                    <FontAwesomeIcon icon={faPlay} />
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
                <ModalPlaylist
                    canciones={listaActual}
                    idListaActual={idListaActual}
                    cargarPlaylist={cargarPlaylist}
                    agregarlistaActual={agregarlistaActual}
                />
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Playlist;