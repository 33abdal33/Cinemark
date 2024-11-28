import { ChangeDetectorRef, Component } from '@angular/core';
import { SimpleHeaderComponent } from "../shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trabajador } from '../Models/trabajador.interface';
import { TrabajadorService } from '../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private trabajadorService: TrabajadorService, private router: Router) {}

  onLogin(): void {
    if (this.username.trim() && this.password.trim()) {
      console.log('Intentando iniciar sesión con:', this.username, this.password);

      // Crear objeto de tipo Trabajador
      const trabajador: Trabajador = {
        idTrabajador: 0,
        nombre: "",
        apellido: "",
        usuario: this.username,
        contraseña: this.password,
        boleta: []

        // Agrega otros campos requeridos si son obligatorios en tu modelo
      };

      this.trabajadorService.IniciarSesion(trabajador).subscribe(
        response => {
          console.log('Inicio de sesión exitoso', response);
          // Aquí podrías manejar el éxito, guardar tokens o redirigir
          this.router.navigate(['/regis-cliente']);
        },
        error => {
          console.error('Error al iniciar sesión', error);
          alert('Error al iniciar sesión. Verifica tus credenciales.');
        }
      );
    } else {
      console.error('Los campos de usuario y contraseña son obligatorios.');
      alert('Por favor completa todos los campos.');
    }
  }

  goToRegister(): void {
    // Redirige a la página de registro (register)
    this.router.navigate(['/register']);
  }
}