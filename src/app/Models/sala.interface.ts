
import { Asiento } from "./asiento.interface";
import { Entrada } from "./entrada.interface";

export interface Sala {
  idSala: number;
  numeroSala: string;
  capacidad: number;
  estado: string;
  asientos?: Asiento[];
  entrada?: Entrada[];
}
