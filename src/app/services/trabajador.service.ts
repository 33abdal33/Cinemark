import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsethings';
import { Trabajador } from '../Models/trabajador.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private http = inject(HttpClient);
  private API_URL: string = appsettings.apiURL + 'Trabajador';

  constructor() { }

  // Obtener todos los trabajadores
  AllTrabajadores() {
    return this.http.get<Trabajador[]>(`${appsettings.apiURL}Trabajador/AllTrabajadores`);
  }

  // Obtener trabajador por ID
  GetbyID(id: number) {
    return this.http.get<Trabajador>(`${this.API_URL}/${id}`);
  }

  // Iniciar sesión
  IniciarSesion(objeto: Trabajador) {
    // Enviar el objeto como cuerpo de la solicitud POST
    return this.http.post<Response>(`${this.API_URL}/IniciarSesion`, objeto);
  }

  // Registrarse
  Registrarse(objeto: Trabajador) {
    // Enviar el objeto como cuerpo de la solicitud POST
    return this.http.post<Trabajador>(`${this.API_URL}/Registrarse`, objeto);
  }
}
