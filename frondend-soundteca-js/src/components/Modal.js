import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Modal = ({playlist}) => {
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
                                                    <button
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