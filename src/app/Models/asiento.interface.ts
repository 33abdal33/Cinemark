import { Sala } from "./sala.interface";

export interface Asiento {
  idAsiento: number; // Identificador único
  numeroAsiento: string; // Número del asiento (requerido)
  fila: string; // Fila del asiento (requerido)
  disponible?: boolean | null; // Estado de disponibilidad (opcional, puede ser null)
  idSala?: number | null; // Relación con la sala (opcional)
  idSalaNavigation?: Sala | null; // Referencia a la sala asociada (opcional)
}
