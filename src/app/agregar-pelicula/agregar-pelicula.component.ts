import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../Home/header/header.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import { Pelicula } from '../Models/pelicula.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-pelicula',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SimpleHeaderComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent {
  titulo: string = '';
  genero: string = '';
  duracion: string = '';
  clasificacion: string = '';
  sinopsis: string = '';

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ) { }

  onRegister(): void {
    // Validaciones
    if (!this.titulo || !this.genero || !this.duracion || !this.clasificacion || !this.sinopsis) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Crear el objeto película
    const pelicula: Pelicula = {
      idPelicula: 0,
      titulo: this.titulo,
      genero: this.genero,
      duracion: this.duracion,
      clasificacion: this.clasificacion,
      sinopsis: this.sinopsis,
    };

    // Llamar al servicio para registrar la película
    this.peliculaService.RegistrarPelicula(pelicula).subscribe(
      response => {
        console.log('Película agregada exitosamente:', response);
        alert('Película agregada correctamente');
        this.router.navigate(['/home']); // Redirigir a la lista de películas o donde desees
      },
      error => {
        console.error('Error al agregar la película:', error);
        alert('Hubo un error al agregar la película. Intenta nuevamente.');
      }
    );
  }

}
