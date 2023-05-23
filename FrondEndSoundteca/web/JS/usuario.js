/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function registarUsuario(){
    let nombre = document.getElementById("Name").value
    let email = document.getElementById("Email").value
    let password1 = document.getElementById("Password").value
    let password2 = document.getElementById("RepeatPassword").value
    let data = {"nombre": nombre, "correo": email, "contrasena": password1,
    "tipo_usuario": { "id_tipo_usuario": 1}}
    if (password1 === password2){
        let request = sendRequest('apii/usuario/crear', 'POST', data)
        request.onload = function(){
            alert("El usuario se ha creado correctamente")
            window.location = 'index.html'
        }
        request.onerror = function(){
            alert('Error en los datos')
        }
    } else {
        alert("Las contraseñas no son iguales")
    }
}
