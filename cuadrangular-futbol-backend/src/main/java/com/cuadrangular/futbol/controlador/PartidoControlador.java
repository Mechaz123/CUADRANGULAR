package com.cuadrangular.futbol.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cuadrangular.futbol.excepciones.ResourceNotFoundException;
import com.cuadrangular.futbol.modelo.Partido;
import com.cuadrangular.futbol.repositorio.PartidoRepositorio;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class PartidoControlador {
	
	@Autowired
	private PartidoRepositorio repositorio;
	
	//Este metodo lista los partidos
	@GetMapping("/partidos")
	public List<Partido> listarTodoslosPartidos(){
		return repositorio.findAll();
	}
	
	//Buscar un partido por ID
	@GetMapping("/partidos/{id}")
	public ResponseEntity<Partido> obtenerPartidoPorId(@PathVariable Long id){
		Partido partido = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el partido con el ID: " + id));
		return ResponseEntity.ok(partido);
	}
	
	@PostMapping("/partidos")
	public Partido guardarPartido(@RequestBody Partido partido) {
		return repositorio.save(partido);
	}
}
