import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const Login = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        correo: '',
        contrasenna: ''
    });

    const { correo, contrasenna } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("correo").focus();
    }, [])

    const iniciarSesion = async () => {
        const data = {
            correo: usuario.correo,
            contrasenna: usuario.contrasenna
        }
        const response = await APIInvoke.invokePOST(`/login`, data)
        if (response.data.length === 0) {
            const msg = "Los datos son incorrectos";
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
        } else {
            const datos = JSON.stringify(response.data)
            localStorage.setItem('data', datos);
            navigate("/home");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    }

    return (
        <div className="dark-mode">
            <div className="hold-transition login-page" style={{backgroundColor: '#454D55'}}>
                <div className="login-box">
                    <div className="login-logo">
                        <Link to=""><b>Iniciar Sesión</b></Link>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Bienvenido, ingrese sus credenciales.</p>
                            <form onSubmit={onSubmit}>
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Correo"
                                        id="correo"
                                        name="correo"
                                        value={correo}
                                        onChange={onChange}
                                        required
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
                                        id="contrasenna"
                                        name="contrasenna"
                                        value={contrasenna}
                                        onChange={onChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="social-auth-links text-center mb-3">
                                    <button type="submit" className="btn btn-block btn-primary">
                                        <i className="fab fa-bars" /> Ingresar
                                    </button>
                                    <Link to="/crear-cuenta" className="btn btn-block btn-danger">
                                        <i className="fab fa-bars" /> Registrarse
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;