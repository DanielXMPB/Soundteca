import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import APIInvoke from "../utils/APIInvoke";
import swal from "sweetalert";
import FormNombre from "../components/FormNombre";

const Configuracion = () => {

    const cargarUser = async () => {
        const data = {
            "_id": usuario._id
        }
        const response = await APIInvoke.invokePOST(`/listarPorId`, data);
        const datos = JSON.stringify(response.data);
        localStorage.setItem('data', datos);
        const datosJSON = JSON.parse(datos);
        setUsuario(datosJSON['0'])
        const data1 = {
            _id: datosJSON['0']._id
        }
        const response1 = await APIInvoke.invokePOST(`/listarPlaylist`, data1);
        setPlaylist(response1.data)
    }

    // Cargar Usuario
    const [usuario, setUsuario] = useState({});
    const [playlist, setPlaylist] = useState([]);

    const getData = async () => {
        const json = localStorage.getItem('data');
        const datos = JSON.parse(json);
        if (datos) {
            setUsuario(datos['0']);
            const data = {
                _id: datos['0']._id
            }
            const response = await APIInvoke.invokePOST(`/listarPlaylist`, data);
            setPlaylist(response.data)
        }
    }

    // Se carga al inicio de la pagina
    useEffect(() => {
        getData();
    }, [])

    // AgregarPlaylist
    const [agregarPlay, setAgregarPlay] = useState({
        nombrePlaylist: '',
    });

    const { nombrePlaylist } = agregarPlay;

    const onChangeAgregar = (e) => {
        setAgregarPlay({
            ...agregarPlay,
            [e.target.name]: e.target.value
        })
    }

    const agregrarPlaylist = async () => {
        const data = {
            "id_usuario": usuario._id,
            "playlist": {
                "nombre": agregarPlay.nombrePlaylist,
                "canciones": [],
                "portada": "https://cdn-icons-png.flaticon.com/512/1776/1776601.png"
            }
        }
        const response = await APIInvoke.invokePUT(`/addPlaylist`, data);
        const mensaje = response.message;
        if (mensaje === 'Correcto') {
            const msg = "Se ha creado correctamente";
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
            const msg = "Ha ocurrido un error";
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

    const onSubmitNombrePlaylist = (e) => {
        e.preventDefault();
        agregrarPlaylist();
    }

    //Actualizar nombre usuario
    const [actulizarNombreUsuario, setActulizarNombre] = useState({
        nombreUsuario: '',
    });

    const { nombreUsuario } = actulizarNombreUsuario;

    const onChangeActualizarNombre = (e) => {
        setActulizarNombre({
            ...actulizarNombreUsuario,
            [e.target.name]: e.target.value
        })
    }

    const actualizaNombre = async (nombre) => {
        const data = {
            "id_usuario": usuario._id,
            "nombre": actulizarNombreUsuario.nombreUsuario
        }
        const response = await APIInvoke.invokePUT(`/actualizarNombre`, data);
        const mensaje = response.message;
        if (mensaje === 'Correcto') {
            const msg = "Se ha actualizo correctamente";
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
            const msg = "Ha ocurrido un error";
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

    const onSubmitNombre = (e) => {
        e.preventDefault();
        actualizaNombre();
    }

    // Eliminar playlist
    const eliminarPlaylist = async (e, idPlaylist, idUsuario) => {
        e.preventDefault();
        const data = {
            "id_usuario": idUsuario,
            "id_playlist": idPlaylist
        }
        const response = await APIInvoke.invokePUT(`/eliminaPlaylist`, data);
        if (response.message === 'Correcto') {
            const msg = "Se ha eliminado correctamente";
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
                                    <h3 className="card-title">Configuracion</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card card-primary">
                                                <div className="card-header">
                                                    <h3 className="card-title">Actualizar Datos</h3>
                                                </div>
                                                <div className="card-body">
                                                    <FormNombre
                                                        onSubmitNombre={onSubmitNombre}
                                                        nombreUsuario={nombreUsuario}
                                                        onChangeActualizarNombre={onChangeActualizarNombre}
                                                    />
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Correo</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Correo" />
                                                        <br />
                                                        <button type="submit" className="btn btn-primary">Actualizar</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                                                        <br />
                                                        <button type="submit" className="btn btn-primary">Actualizar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card card-success">
                                                <div className="card-header">
                                                    <h3 className="card-title">Playlist</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        &nbsp;&nbsp;&nbsp;
                                                        <label htmlFor="exampleInputEmail1">Agregar Playlist</label>
                                                    </div>
                                                    <form onSubmit={onSubmitNombrePlaylist}>
                                                        <div className="row mb-3">
                                                            <div className="col-8">
                                                                <input className="form-control"
                                                                    placeholder="Nombre"
                                                                    name="nombrePlaylist"
                                                                    id="nombrePlaylist"
                                                                    value={nombrePlaylist}
                                                                    onChange={onChangeAgregar}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="col-4">
                                                                <button type="submit" className="btn btn-success">Agregar</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="row">
                                                        &nbsp;&nbsp;&nbsp;
                                                        <label htmlFor="exampleInputEmail1">Lista</label>
                                                    </div>
                                                    <div className="row overflow-auto">
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
                                                                                    <button onClick={(e) => eliminarPlaylist(e, item._id, usuario._id)}
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Configuracion;