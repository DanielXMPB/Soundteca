/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function registarUsuario() {
    let nombre = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let password1 = document.getElementById("Password").value;
    let password2 = document.getElementById("RepeatPassword").value;
    let data = {"nombre": nombre, "correo": email, "contrasena": password1,
        "tipo_usuario": {"id_tipo_usuario": 2}};
    if (password1 === password2) {
        let request = sendRequest('api/usuario/crear', 'POST', data);
        request.onload = function () {
            alert("El usuario se ha creado correctamente");
            window.location = 'index.html';
        };
        request.onerror = function () {
            alert('Error en los datos');
        };
    } else {
        alert("Las contraseñas no son iguales");
    }
}

function cargarUsuarios() {
    let request = sendRequest('api/usuario/list', 'GET', '');
    let table = document.getElementById('tabla-usuarios');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        data.forEach((element, index) => {
            table.innerHTML += `
                    <tr>
                        <td>${element.id_usuario}</td>
                        <td>${element.nombre}</td>
                        <td>${element.correo}</td>
                        <td>${element.contrasena}</td>
                        <td>
                            <a onclick="eliminarUsuario(${element.id_usuario})" class="btn btn-danger btn-circle btn-sm">
                                <i class="fas fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                    `;
        });
        request.onerror = function () {
            table.innerHTML = `
                    <tr>
                        <td colspan = "5">Error al recuperar datos</td> 
                    </tr>
                    `;
        };
    };
}

function eliminarUsuario(id) {
    let request = sendRequest('api/usuario/borrar/'+id,'DELETE', '');
    request.onload = function(){
        alert('Registro Eliminado Exitosamente.');
        cargarUsuarios();
    };
    request.onerror = function(){
        alert('Error al guardar los cambios.');
    };
}

function buscarUsuariosPorId() {
    let nombre = document.getElementById('buscar-nombre').value;
    let request = sendRequest('api/usuario/nombre/'+nombre, 'GET', '');
    let table = document.getElementById('tabla-usuarios');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        data.forEach((element, index) => {
            table.innerHTML += `
                    <tr>
                        <td>${element.id_usuario}</td>
                        <td>${element.nombre}</td>
                        <td>${element.correo}</td>
                        <td>${element.contrasena}</td>
                        <td>
                            <a onclick="eliminarUsuario(${element.id_usuario})" class="btn btn-danger btn-circle btn-sm">
                                <i class="fas fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                    `;
        });
        request.onerror = function () {
            table.innerHTML = `
                    <tr>
                        <td colspan = "5">Error al recuperar datos</td> 
                    </tr>
                    `;
        };
    };
}