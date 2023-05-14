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
@Table(name = Cancion.TABLE_NAME)
public class Cancion {
    public static final String TABLE_NAME = "cancion";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_cancion;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_album")
    private int id_album;

    @ManyToOne
    @JoinColumn(name = "id_genero")
    private int id_genero;

    public Cancion(){
    }

    public Cancion(int id_cancion, String nombre, int id_album, int id_genero) {
        this.id_cancion = id_cancion;
        this.nombre = nombre;
        this.id_album = id_album;
        this.id_genero = id_genero;
    }

    public int getId_cancion() {
        return id_cancion;
    }

    public void setId_cancion(int id_cancion) {
        this.id_cancion = id_cancion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getId_album() {
        return id_album;
    }

    public void setId_album(int id_album) {
        this.id_album = id_album;
    }

    public int getId_genero() {
        return id_genero;
    }

    public void setId_genero(int id_genero) {
        this.id_genero = id_genero;
    }

}
