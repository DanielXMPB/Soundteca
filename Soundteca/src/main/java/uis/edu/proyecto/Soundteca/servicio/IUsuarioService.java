/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package uis.edu.proyecto.Soundteca.servicio;

import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import uis.edu.proyecto.Soundteca.modelo.LoginUsuario;
import uis.edu.proyecto.Soundteca.modelo.Usuario;

/**
 *
 * @author USUARIO
 */
public interface IUsuarioService {
    
    List<Usuario> findAll();
    Optional<Usuario> findById(Integer id);
    Optional<Usuario> findByNombre(String nombre);
    Usuario create(Usuario usuario);
    Usuario update(Usuario usuario);
    void delete(Integer id);
    int Login(LoginUsuario usuarioLog);
    ResponseEntity<?> ingresar(LoginUsuario usuarioLog);
    
}
