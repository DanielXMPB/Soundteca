/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uis.edu.proyecto.Soundteca.modelo.LoginUsuario;
import uis.edu.proyecto.Soundteca.modelo.Usuario;
import uis.edu.proyecto.Soundteca.servicio.UsuarioService;

/**
 *
 * @author USUARIO
 */

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {
    
    @Autowired
    UsuarioService usuarioService;
    
    @GetMapping("/list")
    public ResponseEntity<List<Usuario>> findAll(){
        return ResponseEntity.ok(usuarioService.findAll());
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable("id") Integer id) {
        return usuarioService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @GetMapping("/nombre/{nombre}")
    public ResponseEntity<Usuario> findByNombre(@PathVariable("nombre") String nombre) {
        return usuarioService.findByNombre(nombre)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @PostMapping("/crear")
    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
        return new ResponseEntity<>(usuarioService.create(usuario), HttpStatus.CREATED);
    }
    
    @PutMapping
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
        return usuarioService.findById(usuario.getId_usuario())
                .map(c -> ResponseEntity.ok(usuarioService.update(usuario)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @DeleteMapping
    public ResponseEntity<Usuario> delete(Integer id) {
        return usuarioService.findById(id)
                .map(c -> {
                    usuarioService.delete(id);
                    return ResponseEntity.ok(c);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @PostMapping("/loginUsuario")
    public int login (@RequestBody LoginUsuario usuarioLog) {
        int reponseLogin = usuarioService.Login(usuarioLog);
        return reponseLogin;
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario (@RequestBody LoginUsuario usarioLog) {
        return usuarioService.ingresar(usarioLog);
    }
    
}
