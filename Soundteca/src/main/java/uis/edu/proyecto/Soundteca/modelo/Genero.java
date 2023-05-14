package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Genero.TABLE_NAME)
public class Genero {
    public static final String TABLE_NAME = "genero";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_genero;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    public Genero() {
    }

    public Genero(int id_genero, String nombre) {
        this.id_genero = id_genero;
        this.nombre = nombre;
    }


    public int getId_genero() {
        return id_genero;
    }

    public void setId_genero(int id_genero) {
        this.id_genero = id_genero;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
