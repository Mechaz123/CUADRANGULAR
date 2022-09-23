package com.cuadrangular.futbol.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cuadrangular.futbol.modelo.Equipo;

@Repository
public interface EquipoRepositorio extends JpaRepository<Equipo, Long> {

}