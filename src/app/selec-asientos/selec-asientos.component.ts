import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asientos',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './selec-asientos.component.html',
  styleUrls: ['./selec-asientos.component.scss']
})
export class SelecAsientosComponent implements OnInit {
  peliculaId!: number; // Variable para almacenar el ID de la película
  seats: { number: number; selected: boolean }[] = []; // Lista de asientos

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro 'peliculaId' de la URL
    this.route.queryParams.subscribe(params => {
      this.peliculaId = +params['peliculaId']; // Convertimos a número
      console.log('ID de la película:', this.peliculaId);
    });

    // Inicializar los asientos
    this.initializeSeats();
  }

  initializeSeats(): void {
    // Crear 20 asientos como ejemplo
    for (let i = 1; i <= 20; i++) {
      this.seats.push({ number: i, selected: false });
    }
  }

  toggleSeat(seat: { number: number; selected: boolean }): void {
    // Alternar el estado del asiento
    seat.selected = !seat.selected;
  }

  confirmSeats(): void {
    // Filtrar los asientos seleccionados
    const selectedSeats = this.seats.filter(seat => seat.selected);
    console.log('Asientos seleccionados:', selectedSeats);
    alert(`Asientos seleccionados: ${selectedSeats.map(seat => seat.number).join(', ')}`);
  }

  cancel(): void {
    // Deseleccionar todos los asientos
    this.seats.forEach(seat => (seat.selected = false));
    alert('Selección de asientos cancelada.');
  }
}
