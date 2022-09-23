package com.cuadrangular.futbol.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cuadrangular.futbol.excepciones.ResourceNotFoundException;
import com.cuadrangular.futbol.modelo.Equipo;
import com.cuadrangular.futbol.repositorio.EquipoRepositorio;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class EquipoControlador {

	@Autowired
	private EquipoRepositorio repositorio;
	
	//Este metodo lista los equipos
	@GetMapping("/equipos")
	public List<Equipo> listarTodosLosEquipos(){
		return repositorio.findAll();
	}
	
	//Buscar un equipo por ID
	@GetMapping("/equipos/{id}")
	public ResponseEntity<Equipo> obtenerEquipoPorId(@PathVariable Long id){
		Equipo equipo = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el equipo con el ID: " + id));
		return ResponseEntity.ok(equipo);
				
	}
	
	//Ingresa Equipos
	@PostMapping("/equipos")
	public Equipo guardarEquipo(@RequestBody Equipo equipo) {
		return repositorio.save(equipo);
	}
	
	@PutMapping("/equipos/{id}")
	public ResponseEntity<Equipo> actualizarEquipo(@PathVariable Long id, @RequestBody Equipo detallesEquipo) {
		Equipo equipo = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el equipo con el ID: " + id));
		equipo.setNombre(detallesEquipo.getNombre());
		Equipo equipoActualizado = repositorio.save(equipo);
		return ResponseEntity.ok(equipoActualizado);
	}
	
	@DeleteMapping("/equipos/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarEquipo(@PathVariable Long id){
		Equipo equipo = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el equipo con el ID: " + id));
		repositorio.delete(equipo);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}
