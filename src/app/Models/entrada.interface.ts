import { Pelicula } from "./pelicula.interface";
import { Sala } from "./sala.interface";


export interface Entrada {
  idEntrada: number;
  precio: number;
  idPelicula?: number | null;
  idSala?: number | null;
  idPeliculaNavigation?: Pelicula | null;
  idSalaNavigation?: Sala | null;
}
