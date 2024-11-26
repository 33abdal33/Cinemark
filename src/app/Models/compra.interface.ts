import { Boleta } from "./boleta.interface";
import { Cliente } from "./cliente.interface";

export interface Compra {
    IdCompra: number;
    FechaCompra: string | null;
    TotalCompra: number;
    IdCliente: number | null;
    Boleta: Boleta[];
    IdClienteNavigation: Cliente | null;
  }