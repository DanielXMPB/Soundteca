package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = ArtistaAlbum.TABLE_NAME)
public class ArtistaAlbum {
    public static final String TABLE_NAME = "artista_album";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_artista_album; 

    @ManyToOne
    @JoinColumn(name = "id_artista")
    private int id_artista;

    @ManyToOne
    @JoinColumn(name = "id_album")
    private int id_album;

    public ArtistaAlbum() {
    }

    public ArtistaAlbum(int id_artista_album, int id_artista, int id_album) {
        this.id_artista_album = id_artista_album;
        this.id_artista = id_artista;
        this.id_album = id_album;
    }

    public int getId_artista_album() {
        return id_artista_album;
    }

    public void setId_artista_album(int id_artista_album) {
        this.id_artista_album = id_artista_album;
    }

    public int getId_artista() {
        return id_artista;
    }

    public void setId_artista(int id_artista) {
        this.id_artista = id_artista;
    }

    public int getId_album() {
        return id_album;
    }

    public void setId_album(int id_album) {
        this.id_album = id_album;
    }

}
