import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        correo: '',
        contrasenna: '',
        confirmar: ''
    });

    const { nombre, correo, contrasenna, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const crearCuenta = async () => {
        if (contrasenna !== confirmar) {
            const msg = "Las contraseñas son diferentes.";
            swal({
                title: "Error",
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            const data = {
                nombre: usuario.nombre,
                correo: usuario.correo,
                contrasenna: usuario.contrasenna
            }
            const response = await APIInvoke.invokePOST('/registrar', data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe";
                swal({
                    title: "Error",
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <p><b>Registro</b></p>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registrar usuario</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre completo"
                                    name="nombre"
                                    id="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="correo"
                                    id="correo"
                                    value={correo}
                                    onChange={onChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="contrasenna"
                                    id="contrasenna"
                                    value={contrasenna}
                                    onChange={onChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repetir contraseña"
                                    name="confirmar"
                                    id="confirmar"
                                    value={confirmar}
                                    onChange={onChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <button to="#" className="btn btn-block btn-primary">
                                <i class="fa-solid fa-circle-user"></i>
                                Crear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;