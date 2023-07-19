import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faListUl } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
//import APIInvoke from "../utils/APIInvoke";
import { Link } from "react-router-dom";

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
        setPlaylist(usuario.playlist)
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
                                    <h3 className="card-title">Canciones Favoritas</h3>
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
                                                                <button type="button" className="btn btn-success">
                                                                    <FontAwesomeIcon icon={faPlay} />
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

export default Playlist;