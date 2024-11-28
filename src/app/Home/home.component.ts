import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from "../shared/components/event-card/event-card.component";
import { CommonModule } from '@angular/common';
import { Pelicula } from "../Models/pelicula.interface";
import { PeliculaService } from "../services/pelicula.service";
import { SimpleHeaderComponent } from "../shared/components/simple-header/simple-header.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    EventCardComponent,
    HeaderComponent,
    MatSelectModule
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peliculas: Pelicula[] = [];  // Array para almacenar las películas

  constructor(private peliculaService: PeliculaService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.peliculaService.AllPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
      this.changeDetectorRef.detectChanges();  // Detecta cambios si es necesario
    });
  }
}
