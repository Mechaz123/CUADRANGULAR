import { Component, OnInit } from '@angular/core';
import { Equipo } from './../equipo';
import { EquipoService } from './../equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

  equipos:Equipo[];
  constructor(private equipoServicio:EquipoService, private router:Router) { }

  ngOnInit(): void{
    this.obtenerEquipos();
  }

  private obtenerEquipos(){
    this.equipoServicio.obtenerListaDeEquipos().subscribe(dato =>{
      this.equipos = dato;
    });
  }

  public actualizarEquipo(id:number){
    this.router.navigate(['actualizar-equipo', id]);
  }

  public eliminarEquipo(id:number){
    this.equipoServicio.eliminarEquipo(id).subscribe(dato =>{
      this.obtenerEquipos();
    })
  }
}
