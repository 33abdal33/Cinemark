import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsethings';
import { Cliente } from '../Models/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private http = inject(HttpClient);
  private API_URL: string = appsettings.apiURL + 'Cliente'; // Ruta base para el endpoint Cliente

  constructor() {}

  // Obtener todos los clientes
  AllClientes() {
    return this.http.get<Cliente[]>(`${this.API_URL}/TodosClientes`);
  }

  // Obtener cliente por ID
  GetClienteById(id: number) {
    return this.http.get<Cliente>(`${this.API_URL}/${id}`);
  }

  // Registrar un cliente
  RegistrarCliente(cliente: Cliente) {
    return this.http.post<Cliente>(`${this.API_URL}/RegistrarCliente`, cliente);
  }

  // Editar un cliente
  EditarCliente(cliente: Cliente) {
    return this.http.put<Cliente>(`${this.API_URL}/EditarCliente`, cliente);
  }

  // Eliminar un cliente
  EliminarCliente(id: number) {
    return this.http.delete<string>(`${this.API_URL}/EliminarCliente/${id}`);
  }
}
