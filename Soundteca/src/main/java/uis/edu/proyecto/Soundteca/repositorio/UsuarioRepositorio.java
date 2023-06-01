/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package uis.edu.proyecto.Soundteca.repositorio;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import uis.edu.proyecto.Soundteca.modelo.Usuario;

/**
 *
 * @author USUARIO
 */
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{
    
    @Query(value = "select count(*) from usuario as p where p.correo = :correo and p.contrasena = :contrasena", nativeQuery=true)
    Integer findNumberByCorreoAndContrasena(@Param("correo") String correo, @Param("contrasena") String contrasena);
    
    @Query(value = "select * from usuario as p where p.correo = :correo and p.contrasena = :contrasena", nativeQuery=true)
    Usuario findByCorreoAndContrasena(@Param("correo") String correo, @Param("contrasena") String contrasena);
    
    @Query(value = "select * from usuario u where u.nombre = :nombre", nativeQuery=true)
    Optional<Usuario> findByNombre(@Param("nombre") String nombre);
    
}
