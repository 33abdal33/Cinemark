import { Component } from '@angular/core';
import { HeaderComponent } from "../../../Home/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simple-header',
  standalone: true,
  imports: [HeaderComponent, HeaderComponent, RouterLink],
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.css'
})
export class SimpleHeaderComponent {

}
