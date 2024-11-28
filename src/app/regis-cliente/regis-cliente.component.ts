import { Component } from '@angular/core';
import { SimpleHeaderComponent } from "../shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../Models/cliente.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis-cliente',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './regis-cliente.component.html',
  styleUrls: ['./regis-cliente.component.css']
})
export class RegisClienteComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {}

  onRegister(): void {
    if (!this.nombre.trim() || !this.apellido.trim() || !this.email.trim() || !this.telefono.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const cliente: Cliente = {
      idCliente: 0,
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      telefono: this.telefono,
      compras: [],
    };

    this.clienteService.RegistrarCliente(cliente).subscribe(
      response => {
        console.log('Cliente registrado con éxito', response);
        alert('Cliente registrado correctamente.');
        this.resetForm();
      },
      error => {
        console.error('Error al registrar cliente', error);
        alert('Error al registrar cliente.');
      }
    );
  }

  private resetForm(): void {
    this.nombre = '';
    this.apellido = '';
    this.email = '';
    this.telefono = '';
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
