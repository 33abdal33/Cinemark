import { Boleta } from "./boleta.interface";
import { Cliente } from "./cliente.interface";

export interface Compra {
    idCompra: number;
    gechaCompra: string | null;
    totalCompra: number;
    idCliente: number | null;
    boleta: Boleta[];
    idClienteNavigation: Cliente | null;
  }