import { Component, OnInit } from '@angular/core';
import { Partido } from './../partido';
import { PartidoService } from './../partido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent implements OnInit {

  partidos:Partido[];
  constructor(private partidoServicio:PartidoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPartidos();
  }

  private obtenerPartidos(){
    this.partidoServicio.obtenerListaDePartidos().subscribe(dato =>{
      this.partidos = dato;
      console.log(dato)
    });
  }
}
