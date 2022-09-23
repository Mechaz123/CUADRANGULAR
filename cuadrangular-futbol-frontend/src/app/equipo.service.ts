import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  //La URL de la lista de todos los equipos
  private baseURL = "http://localhost:8080/api/equipos";

  constructor(private httpClient : HttpClient) { }

  //Obtiene la lista de todos los equipos
  obtenerListaDeEquipos():Observable<Equipo[]>{
    return this.httpClient.get<Equipo[]>(`${this.baseURL}`);
  }

  //Registar un equipo
  registrarEquipo(equipo:Equipo) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, equipo)
  }

  obtenerEquipoPorId(id:number) : Observable<Object>{
    return this.httpClient.get<Equipo>(`${this.baseURL}/${id}`);
  }

  eliminarEquipo(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  actualizarEquipo(id:number, equipo:Equipo): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, equipo)
  }


}
