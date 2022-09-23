import { Component, OnInit } from '@angular/core';
import { PartidoService } from './../partido.service';
import { Partido } from './../partido';
import { Router } from '@angular/router';
import { EquipoService } from './../equipo.service';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-registrar-partido',
  templateUrl: './registrar-partido.component.html',
  styleUrls: ['./registrar-partido.component.css']
})
export class RegistrarPartidoComponent implements OnInit {

  constructor(private partidoServicio: PartidoService, private equipoServicio: EquipoService, private router:Router) { }
  partido: Partido = new Partido();
  equipos: Equipo[];

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  guardarPartido(){
    this.partidoServicio.registrarPartido(this.partido).subscribe(dato =>{
      this.irALaListaDePartidos();
    }, error => console.log(error));
  }

  irALaListaDePartidos(){
    this.router.navigate(['/partidos']);
  }

  onSubmit(){
    console.log(this.partido);
    this.guardarPartido();
  }

  private obtenerEquipos(){
    this.equipoServicio.obtenerListaDeEquipos().subscribe(dato =>{
      this.equipos = dato;
    });
  }
}
