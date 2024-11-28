import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../../Home/home.component';
import { ProcesarPagoComponent } from '../../procesar-pago/procesar-pago.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink, HomeComponent, ProcesarPagoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
