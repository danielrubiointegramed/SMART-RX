import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cedula-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cedula-dialog.component.html',
  styleUrls: ['./cedula-dialog.component.scss']
})
export class CedulaDialogComponent {
  cedula: string = '';
  especialidad: string = '';
  institucion: string = '';

  constructor(public dialogRef: MatDialogRef<CedulaDialogComponent>) {}

  onAgregar(): void {
    if (this.cedula) {
      const result = {
        cedula: this.cedula,
        especialidad: this.especialidad,
        institucion: this.institucion,
      };
      this.dialogRef.close(result);
    } else {
      alert('Ingrese la cédula profesional.');
    }
  }

  onCancelar(): void {
    this.dialogRef.close(null);
  }
}
