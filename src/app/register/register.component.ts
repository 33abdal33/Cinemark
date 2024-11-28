import { ChangeDetectorRef, Component } from '@angular/core';
import { SimpleHeaderComponent } from "../shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trabajador } from '../Models/trabajador.interface';
import { TrabajadorService } from '../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  nombre: string = '';
  apellido: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private trabajadorService: TrabajadorService,
    private router: Router
  ) {}

  onRegister(): void {
    // Validación de campos vacíos
    if (!this.nombre.trim() || !this.apellido.trim() || !this.username.trim() || !this.password.trim() || !this.confirmPassword.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validación de contraseñas
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Intentando registrar:', this.username);

    // Crear el objeto trabajador
    const trabajador: Trabajador = {
      idTrabajador: 0,
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.username,
      contraseña: this.password,
      boleta: []
    };

    // Llamar al servicio para registrar al trabajador
    this.trabajadorService.Registrarse(trabajador).subscribe(
      response => {
        console.log('Registro exitoso', response);
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al registrar', error);
        alert('Error al registrar. Inténtalo de nuevo.');
      }
    );
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}