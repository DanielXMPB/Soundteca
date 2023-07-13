import React, { useState } from "react";

const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        correo: '',
        contrasenna: '',
        confirmar: ''
    });

    const {nombre, correo, contrasenna, confirmar} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href="../../index2.html"><b>Registro</b></a>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Registrar usuario</p>
                        <form action="../../index.html" method="post">
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