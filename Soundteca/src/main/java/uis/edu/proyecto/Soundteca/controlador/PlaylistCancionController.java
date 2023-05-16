/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uis.edu.proyecto.Soundteca.modelo.PlaylistCancion;
import uis.edu.proyecto.Soundteca.servicio.PlaylistCancionService;

/**
 *
 * @author Daniel Perez
 */

@RestController
@RequestMapping("/api/playlistCancion")
public class PlaylistCancionController {
    
    @Autowired
    PlaylistCancionService playlistCancionService;
    
    @GetMapping("/list")
    public ResponseEntity<List<PlaylistCancion>> findAll(){
        return ResponseEntity.ok(playlistCancionService.findAll());
    }
    
    @GetMapping("/id/{id_playlist}")
    public ResponseEntity<PlaylistCancion> findByPlaylist(@PathVariable("id_playlist") Integer id_playlist) {
        return playlistCancionService.findByPlaylist(id_playlist)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
}
