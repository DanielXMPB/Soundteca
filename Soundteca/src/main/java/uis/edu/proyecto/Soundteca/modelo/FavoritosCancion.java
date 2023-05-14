package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = FavoritosCancion.TABLE_NAME)
public class FavoritosCancion {
    public static final String TABLE_NAME = "favoritos_cancion";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_favoritos_cancion;

    @ManyToOne
    @JoinColumn(name = "id_favoritos")
    private int id_favoritos;

    @ManyToOne
    @JoinColumn(name = "id_cancion")
    private int id_cancion;

    public FavoritosCancion() {
    }

    public FavoritosCancion(int id_favoritos_cancion, int id_favoritos, int id_cancion) {
        this.id_favoritos_cancion = id_favoritos_cancion;
        this.id_favoritos = id_favoritos;
        this.id_cancion = id_cancion;
    }


    public int getId_favoritos_cancion() {
        return id_favoritos_cancion;
    }

    public void setId_favoritos_cancion(int id_favoritos_cancion) {
        this.id_favoritos_cancion = id_favoritos_cancion;
    }

    public int getId_favoritos() {
        return id_favoritos;
    }

    public void setId_favoritos(int id_favoritos) {
        this.id_favoritos = id_favoritos;
    }

    public int getId_cancion() {
        return id_cancion;
    }

    public void setId_cancion(int id_cancion) {
        this.id_cancion = id_cancion;
    }
}
