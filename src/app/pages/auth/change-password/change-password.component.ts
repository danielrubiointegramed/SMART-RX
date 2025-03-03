import { Component, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-change-password',
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
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  // Enlazamos la clase del host para alternar entre 'light-theme' y 'dark-theme'
  @HostBinding('class') className = 'light-theme';
  isDark = false; // Controla si el tema está en modo oscuro

  drawerOpen = false;
  changeForm!: FormGroup;

  hideCurrent: boolean = true;
  hideNew: boolean = true;
  hideConfirm: boolean = true;

  errorMessage: string = '';
  successMessage: string = '';

  // Datos de usuario para el menú lateral
  userName = 'Daniel';
  userSubtitle = 'Doctor';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.changeForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: [
          '',
          [
            Validators.required,
            // Ejemplo de regex para 1 mayúscula, 1 minúscula, 1 número, 1 caracter especial y mínimo 8 dígitos
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  // Validador personalizado para asegurar que newPassword y confirmPassword sean iguales
  passwordsMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    return newPassword && confirmPassword && newPassword.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  };

  onSubmit(): void {
    if (this.changeForm.invalid) {
      this.errorMessage = 'Por favor, corrija los errores en el formulario.';
      this.successMessage = '';
      return;
    }
    this.errorMessage = '';
    // Aquí iría la lógica real para actualizar la contraseña en tu servicio o API
    this.successMessage = '¡Contraseña actualizada exitosamente!';
    this.changeForm.reset();
  }

  /* Métodos del menú lateral */
  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }
  home(): void {
    alert('Regresando a inicio');
  }
  descargarAviso(): void {
    alert('Descargar aviso personalizado');
  }
  irAvisoPrivacidad(): void {
    this.router.navigate(['/privacy']);
  }
  irTerminosCondiciones(): void {
    this.router.navigate(['/terms']);
  }
  salir(): void {
    alert('Saliendo de la plataforma...');
    this.router.navigate(['/auth/login']);
  }

  /* Alternar tema (claro/oscuro) */
  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.className = this.isDark ? 'dark-theme' : 'light-theme';
  }

  /* Controlar visibilidad de los campos */
  toggleCurrentPasswordVisibility(): void {
    this.hideCurrent = !this.hideCurrent;
  }
  toggleNewPasswordVisibility(): void {
    this.hideNew = !this.hideNew;
  }
  toggleConfirmPasswordVisibility(): void {
    this.hideConfirm = !this.hideConfirm;
  }
}
