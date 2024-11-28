import { Compra } from "./compra.interface";

export interface Cliente {
    idCliente: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    compras: Compra[];
  }