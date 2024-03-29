import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import APIInvoke from "../utils/APIInvoke";
import swal from "sweetalert";

const Modal = ({ playlist, cancionAgregar }) => {

    const agregarCancion = async (e, idPlaylist, idCancion) => {
        e.preventDefault();
        const data = {
            id_playlist: idPlaylist,
            id_cancion: idCancion
        }
        const response = await APIInvoke.invokePOST(`/agregarEnPlaylist`, data)
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
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Lista de Playlist</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead style={{ display: 'none' }}>
                                <tr>
                                    <th style={{ width: '0%%' }}></th>
                                    <th style={{ width: '50%' }}></th>
                                    <th style={{ width: '50%' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    playlist.map(
                                        (item, index) =>
                                            <tr key={index}>
                                                <td className="align-middle">
                                                    <img src={item.portada} alt="Portada de la canción" className="img-fluid" style={{ maxWidth: "40px" }} />
                                                </td>
                                                <td className="align-middle">{item.nombre}</td>
                                                <td className="align-middle">
                                                    <button onClick={(e) => agregarCancion(e, item._id, cancionAgregar)}
                                                        type="button" className="btn btn-primary">
                                                        <FontAwesomeIcon icon={faPlus} />
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
                </div>
            </div>
        </div>
    )
}

export default Modal;