import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from './../equipo';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent implements OnInit {

  constructor(private equiposervicio:EquipoService, private router:Router) { }
  equipo : Equipo = new Equipo();

  ngOnInit(): void {
    
  }

  guardarEquipo(){
    this.equiposervicio.registrarEquipo(this.equipo).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeEquipos();

    }, error => console.log(error));
  }

  irALaListaDeEquipos(){
    this.router.navigate(['/equipos']);
  }

  onSubmit(){
    this.guardarEquipo();
  }
}
