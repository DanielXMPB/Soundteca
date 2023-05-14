package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Album.TABLE_NAME)
public class Album {
    public static final String TABLE_NAME = "album";


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_album;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    
    public Album(){
    }

    public Album(int id_album, String nombre){
        this.id_album = id_album;
        this.nombre = nombre;
    }

    public static String getTableName() {
        return TABLE_NAME;
    }

    public int getId_album() {
        return id_album;
    }

    public void setId_album(int id_album) {
        this.id_album = id_album;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}
