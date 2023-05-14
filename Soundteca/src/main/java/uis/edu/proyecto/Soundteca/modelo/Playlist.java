package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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


    public Playlist() {
    }


    public Playlist(int id_playlist, String nombre) {
        this.id_playlist = id_playlist;
        this.nombre = nombre;
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
    
}
