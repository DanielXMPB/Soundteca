import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import APIInvoke from "../utils/APIInvoke";
import swal from "sweetalert";
import ModalReproducir from "./ModalReproducir";

const ModalPlaylist = ({ canciones, idListaActual, cargarPlaylist, agregarlistaActual }) => {

    const [reprucionActual, setReprucionActual] = useState({
        artistas: ["", ""]
    });

    const agregarReproduccion = (e, cancion) => {
        e.preventDefault();
        setReprucionActual(cancion)
    }

    const eliminarDePlaylist = async (e, idCancion, idPlaylist) => {
        e.preventDefault();
        const data = {
            id_playlist: idPlaylist,
            id_cancion: idCancion
        }
        const response = await APIInvoke.invokePUT(`/eliminarEnPlaylist`, data)
        if (response.message === 'Correcto') {
            const msg = "Se ha elimino correctamente";
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
            cargarPlaylist();
            agregarlistaActual(e, idListaActual);
        } else {
            const msg = "No se pudo eliminar";
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
        <div className="modal fade" id="modalPlaylist" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Lista de Canciones</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                                    canciones.map(
                                        (item, index) =>
                                            <tr key={index}>
                                                <td className="align-middle">
                                                    <img src={item.portada} alt="Portada de la canción" className="img-fluid" style={{ maxWidth: "80px" }} />
                                                </td>
                                                <td className="align-middle">{item.nombre}</td>
                                                <td className="align-middle">
                                                    <button onClick={(e) => agregarReproduccion(e, item)}
                                                        data-toggle="modal" data-target="#modalReproduciir"
                                                        type="button" className="btn btn-success">
                                                        <FontAwesomeIcon icon={faPlay} />
                                                    </button>
                                                </td>
                                                <td className="align-middle">
                                                    <button onClick={(e) => eliminarDePlaylist(e, item._id, idListaActual)}
                                                    type="button" className="btn btn-danger">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                    <ModalReproducir
                        reproduccion={reprucionActual}
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalPlaylist;