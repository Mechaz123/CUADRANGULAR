import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { RegistrarEquipoComponent } from './registrar-equipo/registrar-equipo.component';
import { ActualizarEquipoComponent } from './actualizar-equipo/actualizar-equipo.component';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component';
import { RegistrarPartidoComponent } from './registrar-partido/registrar-partido.component';

const routes: Routes = [
  {path : 'equipos' , component : ListaEquiposComponent},
  {path:'registrar-equipo', component : RegistrarEquipoComponent},
  {path: 'actualizar-equipo/:id', component : ActualizarEquipoComponent},
  {path: 'partidos', component : ListaPartidosComponent},
  {path: 'registrar-partido', component : RegistrarPartidoComponent},
  {path:'', redirectTo: 'equipos', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
