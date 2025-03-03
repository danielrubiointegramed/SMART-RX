import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signup',
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
    MatCheckboxModule,
    MatIconModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  errorMessage = '';
  cedulaValida = false;
  currentYear = new Date().getFullYear();
  hide: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      secondLastName: [''],
      specialty: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
        ]
      ],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  onValidateCedula(): void {
    const cedulaValue = this.signupForm.get('cedula')?.value;
    if (cedulaValue === '123456') {
      this.cedulaValida = true;
      alert('Cédula válida');
    } else {
      this.cedulaValida = false;
      alert('Cédula inválida');
    }
  }

  onSignup(): void {
    // Validamos los campos obligatorios
    const emailInvalid = this.signupForm.get('email')?.invalid;
    const cedulaInvalid = this.signupForm.get('cedula')?.invalid;
    const firstNameInvalid = this.signupForm.get('firstName')?.invalid;
    const lastNameInvalid = this.signupForm.get('lastName')?.invalid;
    const passwordInvalid = this.signupForm.get('password')?.invalid;

    if (emailInvalid || cedulaInvalid || firstNameInvalid || lastNameInvalid || passwordInvalid) {
      this.errorMessage = 'Por favor, llene todos los campos obligatorios: Correo electrónico, Cédula profesional, Nombre(s), Apellido paterno y Contraseña.';
      return;
    }

    if (this.signupForm.invalid) {
      this.errorMessage = 'El formulario contiene errores. Verifique e intente de nuevo.';
      return;
    }

    this.errorMessage = '';
    alert('¡Registro exitoso!');

  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
  goLogin(): void {
    this.router.navigate(['/login']);
  }
}
