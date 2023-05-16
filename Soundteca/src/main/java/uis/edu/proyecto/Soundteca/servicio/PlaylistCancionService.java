/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.servicio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uis.edu.proyecto.Soundteca.modelo.PlaylistCancion;
import uis.edu.proyecto.Soundteca.repositorio.PlaylistCancionRepositorio;

/**
 *
 * @author Daniel Perez
 */
@Service
public class PlaylistCancionService implements IPlaylistCancionService{

    @Autowired
    private PlaylistCancionRepositorio playlistCancionRepositorio;
    
    @Override
    public List<PlaylistCancion> findAll() {
        return playlistCancionRepositorio.findAll();
    }

    @Override
    public Optional<PlaylistCancion> findByPlaylist(Integer id_playlist) {
        return playlistCancionRepositorio.findByPlaylist(id_playlist);
   }
    
    
    
}
