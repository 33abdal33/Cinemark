import { Boleta } from "./boleta.interface";

export interface Trabajador{
    IdTrabajador: number;
    Nombre: string;
    Apellido: string;
    Usuario: string;
    Contraseña: string;
    Boleta: Boleta[];
}