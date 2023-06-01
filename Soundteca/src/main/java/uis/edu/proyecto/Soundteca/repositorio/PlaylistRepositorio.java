package uis.edu.proyecto.Soundteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import uis.edu.proyecto.Soundteca.modelo.Playlist;

/**
 *
 * @author USUARIO
 */
public interface PlaylistRepositorio extends JpaRepository<Playlist, Integer>{
    
    @Query(value = "select count(*) from playlist as p where p.nombre = :nombre", nativeQuery=true)
    Integer findNumberByPlaylist(@Param("nombre") String nombre);
    
    @Query(value = "select * from usuario as p where p.nombre = :nombre", nativeQuery=true)
    Playlist findByNombre(@Param("nombre") String nombre);
}