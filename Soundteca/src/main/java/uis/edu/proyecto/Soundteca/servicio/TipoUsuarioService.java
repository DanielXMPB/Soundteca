/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package uis.edu.proyecto.Soundteca.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uis.edu.proyecto.Soundteca.repositorio.TipoUsuarioRepositorio;

/**
 *
 * @author USUARIO
 */
@Service
public class TipoUsuarioService implements ITipoUsuarioService{
    
    @Autowired
    private TipoUsuarioRepositorio tipoUsuarioReposiotio;
}
