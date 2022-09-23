package com.cuadrangular.futbol.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Partidos")
public class Partido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "Primer_equipo_id")
	Equipo primer_Equipo_id;

	@Column(name = "Primer_equipo_goles", nullable = false)
	private int primer_Equipo_Goles;

	@ManyToOne
	@JoinColumn(name = "Segundo_equipo_id")
	Equipo segundo_Equipo_id;

	@Column(name = "Segundo_equipo_goles", nullable = false)
	private int segundo_Equipo_Goles;

	public Partido() {

	}

	public Partido(Long id, Equipo primer_Equipo_id, int primer_Equipo_Goles, Equipo segundo_Equipo_id, int segundo_Equipo_Goles) {
		super();
		this.id = id;
		this.primer_Equipo_id = primer_Equipo_id;
		this.primer_Equipo_Goles = primer_Equipo_Goles;
		this.segundo_Equipo_id = segundo_Equipo_id;
		this.segundo_Equipo_Goles = segundo_Equipo_Goles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Equipo getPrimer_Equipo_id() {
		return primer_Equipo_id;
	}

	public void setPrimer_Equipo_id(Equipo primer_Equipo_id) {
		this.primer_Equipo_id = primer_Equipo_id;
	}

	public int getPrimer_Equipo_Goles() {
		return primer_Equipo_Goles;
	}

	public void setPrimer_Equipo_Goles(int primer_Equipo_Goles) {
		this.primer_Equipo_Goles = primer_Equipo_Goles;
	}

	public Equipo getSegundo_Equipo_id() {
		return segundo_Equipo_id;
	}

	public void setSegundo_Equipo_id(Equipo segundo_Equipo_id) {
		this.segundo_Equipo_id = segundo_Equipo_id;
	}

	public int getSegundo_Equipo_Goles() {
		return segundo_Equipo_Goles;
	}

	public void setSegundo_Equipo_Goles(int segundo_Equipo_Goles) {
		this.segundo_Equipo_Goles = segundo_Equipo_Goles;
	}
	
	
	
	


}
