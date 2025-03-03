import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-prescription-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './prescription-dialog.component.html',
  styleUrls: ['./prescription-dialog.component.scss'],
})
export class PrescriptionDialogComponent {
  // Datos de la prescripción
  cantidad: number = 1;
  frecuencia: string = '24'; // cada 24 hrs
  duracion: number = 1;      // 1 día
  indicaciones: string = '';

  constructor(
    public dialogRef: MatDialogRef<PrescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // data.medicamento => el medicamento seleccionado
  }

  onAgregar(): void {
    const prescripcionData = {
      cantidad: this.cantidad,
      frecuencia: this.frecuencia,
      duracion: this.duracion,
      indicaciones: this.indicaciones,
    };
    this.dialogRef.close(prescripcionData);
  }

  onCancelar(): void {
    this.dialogRef.close(null);
  }
}
