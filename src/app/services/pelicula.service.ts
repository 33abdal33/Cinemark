import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../Models/pelicula.interface';
import { appsettings } from '../Settings/appsethings';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private http = inject(HttpClient);
  private API_URL: string = appsettings.apiURL + 'Pelicula';

  constructor() {}

  // Obtener todas las películas
  AllPeliculas() {
    return this.http.get<Pelicula[]>(`${appsettings.apiURL}Pelicula`);
  }

  // Obtener película por ID
  GetbyID(id: number) {
    return this.http.get<Pelicula>(`${this.API_URL}/${id}`);
  }
}
