import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEquipoComponent } from './registrar-equipo/registrar-equipo.component'
import { FormsModule } from '@angular/forms';
import { ActualizarEquipoComponent } from './actualizar-equipo/actualizar-equipo.component';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component';
import { RegistrarPartidoComponent } from './registrar-partido/registrar-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEquiposComponent,
    RegistrarEquipoComponent,
    ActualizarEquipoComponent,
    ListaPartidosComponent,
    RegistrarPartidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
