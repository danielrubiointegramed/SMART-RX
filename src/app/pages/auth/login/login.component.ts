import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Importar módulos de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Importa RouterModule y Router para navegación
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginAttempts = 0;
  isLocked = false;
  errorMessage = '';
  currentYear: number = new Date().getFullYear();
  hide: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // Contraseña con regex: minúscula, mayúscula, dígito, carácter especial, mínimo 8 caracteres
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
        ]
      ]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid || this.isLocked) {
      return;
    }

    const { email, password } = this.loginForm.value;
    // Validación estática de ejemplo. En producción, usar un servicio de autenticación.
    if (email === 'user@example.com' && password === 'P@ssw0rd') {
      this.errorMessage = '';
      this.loginAttempts = 0;
      alert('¡Bienvenido a la plataforma!');
      this.router.navigate(['/home']); // Navega a home al iniciar sesión correctamente.
    } else {
      this.loginAttempts++;
      this.errorMessage = `Credenciales inválidas. Intento #${this.loginAttempts}`;
      if (this.loginAttempts >= 3) {
        this.isLocked = true;
      }
    }
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
