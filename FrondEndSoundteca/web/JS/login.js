/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function validarLogin() {
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    let data = {'correo': email, 'contrasena': password};
    let request = sendRequest('api/usuario/loginUsuario', 'POST', data);
    request.onload = function () {
        let data1 = request.response;
        console.log(data1);
        if (data1 === 1) {
            alert("Login Correcto");
            login(data)
                    .then(idtipo => {
                        if (idtipo === 1) {
                            window.location = 'menuAdmin.html';
                        } else if (idtipo === 2) {
                            window.location = 'menu.html';
                        } else {
                            alert('Error');
                        }
                    })
                    .catch(error => {
                        alert(error);
                    });
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        request.onerror = function () {
            alert("Error al recuperar sus datos");
        };
    };
}

function login(data) {
    return new Promise((resolve, reject) => {
        let request = sendRequest('api/usuario/login', 'POST', data);
        request.onload = function () {
            let datos = request.response;
            let idtipo = datos.Usuario.tipo_usuario.id_tipo_usuario;
            resolve(idtipo);
        };
        request.onerror = function () {
            reject("Error al recuperar los datos.");
        };
    });
}
