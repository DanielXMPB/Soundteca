package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = PlaylistUsuario.TABLE_NAME)
public class PlaylistUsuario {
    public static final String TABLE_NAME = "playlist_usuario";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_playlist_usuario;

    @ManyToOne
    @JoinColumn(name = "id_playlist")
    private Playlist id_playlist;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario id_usuario;

    public PlaylistUsuario() {
    }

    public PlaylistUsuario(int id_playlist_usuario, Playlist id_playlist, Usuario id_usuario) {
        this.id_playlist_usuario = id_playlist_usuario;
        this.id_playlist = id_playlist;
        this.id_usuario = id_usuario;
    }

    public int getId_playlist_usuario() {
        return id_playlist_usuario;
    }

    public void setId_playlist_usuario(int id_playlist_usuario) {
        this.id_playlist_usuario = id_playlist_usuario;
    }

    public Playlist getId_playlist() {
        return id_playlist;
    }

    public void setId_playlist(Playlist id_playlist) {
        this.id_playlist = id_playlist;
    }

    public Usuario getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Usuario id_usuario) {
        this.id_usuario = id_usuario;
    }

}
