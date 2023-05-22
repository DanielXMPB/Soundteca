package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = Playlist.TABLE_NAME)
public class Playlist {
    public static final String TABLE_NAME = "playlist";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_playlist;


    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario id_usuario;

    public Playlist() {
    }

    public Playlist(int id_playlist, String nombre, Usuario id_usuario) {
        this.id_playlist = id_playlist;
        this.nombre = nombre;
        this.id_usuario = id_usuario;
    }

    public int getId_playlist() {
        return id_playlist;
    }


    public void setId_playlist(int id_playlist) {
        this.id_playlist = id_playlist;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Usuario getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Usuario id_usuario) {
        this.id_usuario = id_usuario;
    }
    
}
