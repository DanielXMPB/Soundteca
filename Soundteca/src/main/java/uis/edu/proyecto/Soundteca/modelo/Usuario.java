/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 *
 * @author USUARIO
 */
@Entity
@Table(name=Usuario.TABLE_NAME)
public class Usuario {
    
    public static final String TABLE_NAME = "usuario";
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_usuario;
    
    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    
    @Column(name = "correo", nullable = false, length = 50)
    private String correo;
    
    @Column(name = "contrasena", nullable = false, length = 50)
    private String contrasena;
    
    @ManyToOne
    @JoinColumn(name = "id_tipo_usuario")
    private TipoUsuario id_tipo_usuario;

    public Usuario() {
    }

    public Usuario(int id_usuario, String nombre, String correo, String contrasena, TipoUsuario id_tipo_usuario) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.id_tipo_usuario = id_tipo_usuario;
    }

    public Usuario(String nombre, String correo, String contrasena, TipoUsuario id_tipo_usuario) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.id_tipo_usuario = id_tipo_usuario;
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

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    public TipoUsuario getTipo_usuario() {
        return id_tipo_usuario;
    }

    public void setTipo_usuario(TipoUsuario id_tipo_usuario) {
        this.id_tipo_usuario = id_tipo_usuario;
    }
    
}
