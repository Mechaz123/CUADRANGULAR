import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from './partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  //La URL de la lista de todos los partidos
  private baseURL = "http://localhost:8080/api/partidos";

  constructor(private HttpClient : HttpClient) { }

  //Obtiene la lista de todos los equipos
  obtenerListaDePartidos():Observable<Partido[]>{
    return this.HttpClient.get<Partido[]>(`${this.baseURL}`);
  }

  registrarPartido(partido:Partido) : Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}`, partido);
  }
}
