import { Compra } from "./compra.interface";
import { Trabajador } from "./trabajador.interface";

export interface Boleta {
    idBoleta: number;
    fechaBoleta: string | null;
    montoTotal: number;
    idCompra: number | null;
    idTrabajador: number | null;
    idCompraNavigation: Compra | null;
    idTrabajadorNavigation: Trabajador | null;
  }
  