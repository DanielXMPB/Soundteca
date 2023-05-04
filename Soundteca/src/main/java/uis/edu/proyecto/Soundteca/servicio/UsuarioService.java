/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.servicio;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import uis.edu.proyecto.Soundteca.modelo.LoginUsuario;
import uis.edu.proyecto.Soundteca.modelo.Usuario;
import uis.edu.proyecto.Soundteca.repositorio.UsuarioRepositorio;

/**
 *
 * @author USUARIO
 */
@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Override
    public List<Usuario> findAll() {
        return usuarioRepositorio.findAll();
    }

    @Override
    public Optional<Usuario> findById(Integer id){
        return usuarioRepositorio.findById(id);
    }
    
    @Override
    public Usuario create(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    @Override
    public Usuario update(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    @Override
    public void delete(Integer id){
        usuarioRepositorio.deleteById(id);
    }

    @Override
    public int Login(LoginUsuario usuarioLog) {
        int u = usuarioRepositorio.findNumberByCorreoAndContrasena(usuarioLog.getCorreo(), usuarioLog.getContrasena());
        return u;
    }

    @Override
    public ResponseEntity<?> ingresar(LoginUsuario usuarioLog) {
        Map<String, Object> response = new HashMap<>();
        Usuario usuario = null;
        try {
            usuario = usuarioRepositorio.findByCorreoAndContrasena(usuarioLog.getCorreo(), usuarioLog.getContrasena());
            if (usuario == null) {
                response.put("Usuario", null);
                response.put("Mensaje", "Alerta: Correo o Contreseña incorrectos");
                response.put("satusCode", HttpStatus.NOT_FOUND.value());
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            } else {
                response.put("Usuario", usuario);
                response.put("Mensaje", "Datos Correctos");
                response.put("satusCode", HttpStatus.OK.value());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
        } catch (Exception e) {
            response.put("Usuario", null);
            response.put("Mensaje", "Ha ocurrido un error");
            response.put("satusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
