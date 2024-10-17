import { Component } from '@angular/core';
import { SimpleHeaderComponent } from "../shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

}
