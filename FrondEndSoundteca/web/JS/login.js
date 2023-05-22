/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function validarLogin(){
    var email = document.getElementById('Email').value
    var password = document.getElementById('Password').value
    let data = {'correo': email, 'contrasena': password}
    let request = sendRequest('api/usuario/loginUsuario', 'POST', data)
    request.onload = function(){
        let data1 = request.response;
        console.log(data1)
        if (data1 === 1){
            alert("Login Correcto");
            window.location = 'menu.html';
        } else {
            alert("Usuario o contraseña incorrectos")
        }
        request.onerror = function(){
            alert("Error al recuperar sus datos")
        }
    }
}
