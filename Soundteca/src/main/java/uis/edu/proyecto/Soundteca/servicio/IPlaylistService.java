package uis.edu.proyecto.Soundteca.servicio;

import java.util.List;
import java.util.Optional;
import uis.edu.proyecto.Soundteca.modelo.Playlist;

/**
 *
 * @author USUARIO
 */
public interface IPlaylistService {
    
    List<Playlist> findAll();
    Optional<Playlist> findById(Integer id);
    Optional<Playlist> findByNombre(String nombre);
    Playlist create(Playlist playlist);
    Playlist update(Playlist playlist);
    void delete(Integer id);
}
