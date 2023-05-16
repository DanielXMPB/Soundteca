/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package uis.edu.proyecto.Soundteca.repositorio;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import uis.edu.proyecto.Soundteca.modelo.PlaylistCancion;

/**
 *
 * @author Daniel Perez
 */
public interface PlaylistCancionRepositorio extends JpaRepository<PlaylistCancion, Integer>{
    
    @Query(value = "select * from playlist_cancion pc where pc.id_playlist = :id_playlist ;", nativeQuery=true)
    Optional<PlaylistCancion> findByPlaylist(@Param("id_playlist") Integer id_playlist);
    
}
