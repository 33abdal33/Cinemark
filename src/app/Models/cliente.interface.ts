import { Compra } from "./compra.interface";

export interface Cliente {
    IdCliente: number;
    Nombre: string;
    Apellido: string;
    Email: string;
    Telefono: string;
    Compras: Compra[];
  }