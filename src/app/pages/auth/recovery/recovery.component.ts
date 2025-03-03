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

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  recoveryForm!: FormGroup;
  errorMessage = '';
  successMessage = '';
  currentYear: number = new Date().getFullYear();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onRecover(): void {
    if (this.recoveryForm.invalid) {
      this.errorMessage = 'Por favor ingrese un correo electrónico válido.';
      this.successMessage = '';
      return;
    }
    this.errorMessage = '';
    // Aquí se llamaría a un servicio para enviar el enlace de recuperación.
    this.successMessage = 'Se ha enviado un enlace de recuperación a su correo electrónico.';
  }
  goLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
