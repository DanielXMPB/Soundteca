package uis.edu.proyecto.Soundteca.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import uis.edu.proyecto.Soundteca.modelo.Playlist;
import uis.edu.proyecto.Soundteca.servicio.PlaylistService;

@RestController
@RequestMapping("/api/playlist")
public class PlaylistController {
    
    @Autowired
    PlaylistService playlistService;

    @GetMapping("/list")
    public ResponseEntity<List<Playlist>> findAll(){
        return ResponseEntity.ok(playlistService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Playlist> findById(@PathVariable("id") Integer id){
        return playlistService.findById(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Playlist> create(@RequestBody Playlist playlist) {
        return new ResponseEntity<>(playlistService.create(playlist), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Playlist> update(@RequestBody Playlist playlist) {
        return playlistService.findById(playlist.getId_playlist())
                .map(c -> ResponseEntity.ok(playlistService.update(playlist)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public ResponseEntity<Playlist> delete(Integer id) {
        return playlistService.findById(id)
                .map(c -> {
                    playlistService.delete(id);
                    return ResponseEntity.ok(c);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
