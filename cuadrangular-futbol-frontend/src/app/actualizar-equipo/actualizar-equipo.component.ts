import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-actualizar-equipo',
  templateUrl: './actualizar-equipo.component.html',
  styleUrls: ['./actualizar-equipo.component.css']
})
export class ActualizarEquipoComponent implements OnInit {
  equipo: any;
  @Input() id:number;
  constructor(private equipoServicio:EquipoService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.obtenerEquipoPorId();
  }

  actualizarEquipo(){
    this.equipoServicio.actualizarEquipo(this.id, this.equipo).subscribe(dato =>{
      this.redirectListaEquipos();

    }, error => console.log(error));
  }

  redirectListaEquipos(){
    this.router.navigate(['/equipos']);
  }

  private obtenerEquipoPorId(){
    this.equipoServicio.obtenerEquipoPorId(this.id).subscribe(dato =>{
      this.equipo = dato;
    });
  }

}
