import { Compra } from "./compra.interface";
import { Trabajador } from "./trabajador.interface";

export interface Boleta {
    IdBoleta: number;
    FechaBoleta: string | null;
    MontoTotal: number;
    IdCompra: number | null;
    IdTrabajador: number | null;
    IdCompraNavigation: Compra | null;
    IdTrabajadorNavigation: Trabajador | null;
  }
  