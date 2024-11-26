import { Boleta } from "./boleta.interface";

export interface Trabajador{
    idTrabajador: number;
    nombre: string;
    apellido: string;
    usuario: string;
    contraseña: string;
    boleta: Boleta[];
}