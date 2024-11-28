import { Component } from '@angular/core';
import { HeaderComponent } from '../selec-asientos/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from "../Home/home.component";
import { SimpleHeaderComponent } from "../shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-procesar-pago',
  standalone: true,
  imports: [HeaderComponent, MatButtonModule, HomeComponent, SimpleHeaderComponent, SimpleHeaderComponent, FooterComponent],
  templateUrl: './procesar-pago.component.html',
  styleUrl: './procesar-pago.component.css'
})
export class ProcesarPagoComponent {

}
