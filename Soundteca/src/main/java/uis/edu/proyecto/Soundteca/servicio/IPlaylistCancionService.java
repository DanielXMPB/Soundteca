/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package uis.edu.proyecto.Soundteca.servicio;

import java.util.List;
import java.util.Optional;
import uis.edu.proyecto.Soundteca.modelo.PlaylistCancion;

/**
 *
 * @author Daniel Perez
 */
public interface IPlaylistCancionService {
    
    List<PlaylistCancion> findAll();
    Optional<PlaylistCancion> findByPlaylist(Integer id);
    
}
