import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-clave-medico-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './clave-medico-dialog.component.html',
  styleUrls: ['./clave-medico-dialog.component.scss']
})
export class ClaveMedicoDialogComponent {
  aseguradora: string = '';
  institucion: string = '';
  clave: string = '';

  // Opciones simuladas
  aseguradoras: string[] = ['AXA', 'GNP', 'MetLife'];
  instituciones: string[] = ['Institución A', 'Institución B', 'Institución C'];

  constructor(public dialogRef: MatDialogRef<ClaveMedicoDialogComponent>) {}

  onAgregar(): void {
    if (this.clave) {
      const result = {
        aseguradora: this.aseguradora,
        institucion: this.institucion,
        clave: this.clave
      };
      this.dialogRef.close(result);
    } else {
      alert('Ingrese la clave de médico.');
    }
  }

  onCancelar(): void {
    this.dialogRef.close(null);
  }
}
