import { Component, Input } from '@angular/core';
import { Pelicula } from '../../../Models/pelicula.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() pelicula?: Pelicula;

  constructor(private router: Router) {}

  onCardClick(): void {
    // Redirige a la página de selección de asientos con el id de la película o evento
    this.router.navigate(['/selec-asientos'], { queryParams: { peliculaId: this.pelicula?.idPelicula } });
  }
}
