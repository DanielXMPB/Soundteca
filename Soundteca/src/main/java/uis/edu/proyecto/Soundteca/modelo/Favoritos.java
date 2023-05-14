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
@Table(name = Favoritos.TABLE_NAME)
public class Favoritos {
    public static final String TABLE_NAME = "favoritos";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_favoritos;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private int id_usuario;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    public Favoritos() {
    }

    public Favoritos(int id_favoritos, int id_usuario, String nombre) {
        this.id_favoritos = id_favoritos;
        this.id_usuario = id_usuario;
        this.nombre = nombre;
    }

    public int getId_favoritos() {
        return id_favoritos;
    }

    public void setId_favoritos(int id_favoritos) {
        this.id_favoritos = id_favoritos;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    } 
}
