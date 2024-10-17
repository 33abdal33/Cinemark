import { Component } from '@angular/core';
import { HeaderComponent } from "../../../Home/header/header.component";

@Component({
  selector: 'app-simple-header',
  standalone: true,
  imports: [HeaderComponent, HeaderComponent],
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.css'
})
export class SimpleHeaderComponent {

}
