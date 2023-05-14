package uis.edu.proyecto.Soundteca.servicio;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import uis.edu.proyecto.Soundteca.modelo.Playlist;
import uis.edu.proyecto.Soundteca.repositorio.PlaylistRepositorio;

@Service
public class PlaylistService implements IPlaylistService{

    private PlaylistRepositorio playlistRepositorio;

    @Override
    public List<Playlist> findAll() {
        return playlistRepositorio.findAll();
    }

    @Override
    public Optional<Playlist> findById(Integer id) {
        return playlistRepositorio.findById(id);
    }

    @Override
    public Playlist create(Playlist playlist) {
        return playlistRepositorio.save(playlist);
    }

    @Override
    public Playlist update(Playlist playlist) {
        return playlistRepositorio.save(playlist);
    }

    @Override
    public void delete(Integer id) {
        playlistRepositorio.deleteById(id);
    }

}
