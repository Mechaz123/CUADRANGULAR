package com.cuadrangular.futbol.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cuadrangular.futbol.modelo.Partido;

public interface PartidoRepositorio extends JpaRepository<Partido, Long>{
	
}
