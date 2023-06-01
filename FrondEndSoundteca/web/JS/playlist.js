/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
*/

function cargarPlaylists() {
    let request = sendRequest('api/playlist/list', 'GET', '');
    let table = document.getElementById('tabla-playlist');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        data.forEach((element, index) => {
            table.innerHTML += `
                    <tr>
                        <td>${element.id_playlist}</td>
                        <td>${element.nombre}</td>
                        <td>
                            <a onclick="eliminarPlaylist(${element.id_playlist})" class="btn btn-danger btn-circle btn-sm">
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

function eliminarPlaylist(id) {
    let request = sendRequest('api/playlist/borrar/'+id,'DELETE', '');
    request.onload = function(){
        alert('Playlist Eliminada Exitosamente.');
        cargarPlaylists();
    };
    request.onerror = function(){
        alert('Error al guardar los cambios.');
    };
}

function buscarPlaylistPorId() {
    let nombre = document.getElementById('buscar-nombre').value;
    let request = sendRequest('api/playlist/nombre/'+nombre, 'GET', '');
    let table = document.getElementById('tabla-playlist');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        data.forEach((element, index) => {
            table.innerHTML += `
                    <tr>
                        <td>${element.id_playlist}</td>
                        <td>${element.nombre}</td>
                        <td>
                            <a onclick="eliminarPlaylist(${element.id_playlist})" class="btn btn-danger btn-circle btn-sm">
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