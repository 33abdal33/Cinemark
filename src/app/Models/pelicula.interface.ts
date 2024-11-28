import { Entrada } from "./entrada.interface";

export interface Pelicula {
  idPelicula: number;
  titulo: string;
  genero: string;
  duracion: string;
  clasificacion: string;
  sinopsis?: string | null;
  entrada?: Entrada[];
}
