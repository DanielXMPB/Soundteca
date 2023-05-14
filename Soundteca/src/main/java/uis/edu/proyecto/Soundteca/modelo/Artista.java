package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Artista.TABLE_NAME)
public class Artista{
    public static final String TABLE_NAME = "artista";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_artista; 

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    public Artista(){
    }

    public Artista(int id_artista, String nombre){
        this.id_artista = id_artista;
        this.nombre = nombre;
    }


    public int getId_artista() {
        return id_artista;
    }

    public void setId_artista(int id_artista) {
        this.id_artista = id_artista;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
