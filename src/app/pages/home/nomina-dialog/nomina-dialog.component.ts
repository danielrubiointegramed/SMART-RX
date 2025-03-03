import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-nomina-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  templateUrl: './nomina-dialog.component.html',
  styleUrls: ['./nomina-dialog.component.scss'],
})
export class NominaDialogComponent {
  // Campos para la nómina
  numeroNomina: string = '';
  numeroNomina2: string = '';
  confirmoAviso: boolean = false;

  // Datos del paciente
  nombre: string = '';
  edad: number | null = null;
  alergias: string = '';
  genero: string = 'Masculino';
  cie: string = '';

  // Para el cálculo del IMC
  peso: number | null = null;
  altura: number | null = null;
  imc: number | null = null; // Se actualizará con updateIMC()

  // Otros campos
  temperatura: number | null = null;
  fr: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<NominaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // data.medicamento => el medicamento
    // data.prescripcion => la prescripción
  }

  /**
   * Calcula el IMC cada vez que cambian el peso o la altura.
   */
  updateIMC(): void {
    if (this.peso && this.altura && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
    } else {
      this.imc = null;
    }
  }

  onAgregar(): void {
    const nominaData = {
      numeroNomina: this.numeroNomina,
      numeroNomina2: this.numeroNomina2,
      confirmoAviso: this.confirmoAviso,
      nombre: this.nombre,
      edad: this.edad,
      alergias: this.alergias,
      genero: this.genero,
      cie: this.cie,
      imc: this.imc, // Guardamos el IMC calculado
      peso: this.peso,
      altura: this.altura,
      temperatura: this.temperatura,
      fr: this.fr,
    };
    this.dialogRef.close(nominaData);
  }

  onCancelar(): void {
    this.dialogRef.close(null);
  }
}
