import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from "../shared/components/event-card/event-card.component";
import { CommonModule } from '@angular/common';
import { TrabajadorService } from "../services/trabajador.service";
import { Trabajador } from "../Models/trabajador.interface";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, MatSelectModule, EventCardComponent, CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  trabajadorList: Trabajador[] = [];

  constructor(
    private trabajadorService: TrabajadorService,
    private cdr: ChangeDetectorRef  // Inyecta ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getTrabajadores();
  }

  getTrabajadores(): void {
    this.trabajadorService.AllTrabajadores().subscribe({
      next: (data) => {
        console.log('Datos recibidos de la API:', data);
        this.trabajadorList = data; // Asigna los datos a la lista de trabajadores
        console.log('TrabajoList', this.trabajadorList);
      },
      error: (err) => {
        console.error('Error al obtener trabajadores:', err);
      }
    });
  }
  
}
