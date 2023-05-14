package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = PlaylistCancion.TABLE_NAME)
public class PlaylistCancion {
    public static final String TABLE_NAME = "playlist_cancion";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_playlist_cancion;

    @ManyToOne
    @JoinColumn(name = "id_playlist")
    private int id_playlist;


    @ManyToOne
    @JoinColumn(name = "id_cancion")
    private int id_cancion;


    public PlaylistCancion() {
    }


    public PlaylistCancion(int id_playlist_cancion, int id_playlist, int id_cancion) {
        this.id_playlist_cancion = id_playlist_cancion;
        this.id_playlist = id_playlist;
        this.id_cancion = id_cancion;
    }

    public int getId_playlist_cancion() {
        return id_playlist_cancion;
    }


    public void setId_playlist_cancion(int id_playlist_cancion) {
        this.id_playlist_cancion = id_playlist_cancion;
    }


    public int getId_playlist() {
        return id_playlist;
    }


    public void setId_playlist(int id_playlist) {
        this.id_playlist = id_playlist;
    }


    public int getId_cancion() {
        return id_cancion;
    }


    public void setId_cancion(int id_cancion) {
        this.id_cancion = id_cancion;
    }

}
