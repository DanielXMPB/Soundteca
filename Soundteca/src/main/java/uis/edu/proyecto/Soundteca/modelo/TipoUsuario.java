/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author USUARIO
 */
@Entity
@Table(name=TipoUsuario.TABLE_NAME)
public class TipoUsuario {
    
    public static final String TABLE_NAME = "tipo_usuario";
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_tipo_usuario;
    
    @Column(name = "nombre_tipo")
    private String nombre_tipo;

    public TipoUsuario() {
    }

    public TipoUsuario(int id_tipo_usuario, String nombre_tipo) {
        this.id_tipo_usuario = id_tipo_usuario;
        this.nombre_tipo = nombre_tipo;
    }

    public int getId_tipo_usuario() {
        return id_tipo_usuario;
    }

    public void setId_tipo_usuario(int id_tipo_usuario) {
        this.id_tipo_usuario = id_tipo_usuario;
    }

    public String getNombre() {
        return nombre_tipo;
    }

    public void setNombre(String nombre_tipo) {
        this.nombre_tipo = nombre_tipo;
    }
    
}
