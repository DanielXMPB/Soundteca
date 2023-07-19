import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import APIInvoke from "../utils/APIInvoke";
import swal from "sweetalert";

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
        setPlaylist(datosJSON['0'].playlist)
    }

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
    const eliminarPlaylist = async (e, nombre, idUsuario) => {
        e.preventDefault();
        const data = {
            "id_usuario": idUsuario,
            "nombre": nombre
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
                                                    <form onSubmit={onSubmitNombre}>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Nombre</label>
                                                            <input className="form-control"
                                                                placeholder="Nombre"
                                                                name="nombreUsuario"
                                                                id="nombreUsuario"
                                                                value={nombreUsuario}
                                                                onChange={onChangeActualizarNombre}
                                                                required
                                                            />
                                                            <br />
                                                            <button type="submit" className="btn btn-primary">Actualizar</button>
                                                        </div>
                                                    </form>
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
                                                                                    <button onClick={(e) => eliminarPlaylist(e, item.nombre, usuario._id)}
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