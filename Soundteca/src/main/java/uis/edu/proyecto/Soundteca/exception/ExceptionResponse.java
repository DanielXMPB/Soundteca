/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.exception;

import java.util.Date;

/**
 *
 * @author USUARIO
 */
public class ExceptionResponse {
    private Date timestamp;
    private String mensjae;
    private String detalles;

    public ExceptionResponse() {
    }

    public ExceptionResponse(Date timestamp, String mensjae, String detalles) {
        this.timestamp = timestamp;
        this.mensjae = mensjae;
        this.detalles = detalles;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMensjae() {
        return mensjae;
    }

    public void setMensjae(String mensjae) {
        this.mensjae = mensjae;
    }

    public String getDetalles() {
        return detalles;
    }

    public void setDetalles(String detalles) {
        this.detalles = detalles;
    }
    
    
    
}
