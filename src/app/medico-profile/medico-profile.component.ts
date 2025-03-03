import { Component, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Servicio para ID Cards
import { IdCardService } from '../services/idcard.service';

@Component({
  standalone: true,
  selector: 'app-medico-profile',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './medico-profile.component.html',
  styleUrls: ['./medico-profile.component.scss'],
})
export class MedicoProfileComponent implements OnInit {
  @HostBinding('class') className = 'light-theme';
  isDark = false;
  drawerOpen = false;

  // Datos personales
  nombre: string = 'Juan';
  apellidoPaterno: string = 'Pérez';
  apellidoMaterno: string = 'García';
  correo: string = 'juan.perez@hospital.com';

  // Dirección
  cp: string = '';
  estado: string = '';
  municipio: string = '';
  colonia: string = '';

  // Porcentaje del perfil
  porcentajePerfil: number = 0;

  // Suscripciones a datos compartidos
  cedulas: any[] = [];
  clavesMedico: any[] = [];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private idCardService: IdCardService
  ) {}

  ngOnInit(): void {
    // Inicializar arrays desde el servicio
    this.cedulas = this.idCardService.cedulas;
    this.clavesMedico = this.idCardService.clavesMedico;
    this.calcularPorcentajePerfil();

    // Suscribirse a cambios
    this.idCardService.cedulas$.subscribe((cedulas) => {
      this.cedulas = cedulas;
      this.calcularPorcentajePerfil();
    });
    this.idCardService.claves$.subscribe((claves) => {
      this.clavesMedico = claves;
      this.calcularPorcentajePerfil();
    });
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.className = this.isDark ? 'dark-theme' : 'light-theme';
  }

  calcularPorcentajePerfil(): void {
    const total = 6;
    let completados = 0;
    if (this.correo) completados++;
    if (this.nombre && this.apellidoPaterno && this.apellidoMaterno) completados++;
    if (this.cedulas.length > 0) completados++;
    if (this.clavesMedico.length > 0) completados++;
    if (this.cp && this.estado && this.municipio && this.colonia) completados++;
    this.porcentajePerfil = Math.round((completados / total) * 100);
  }

  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }

  home(): void {
    alert('Regresando a inicio');
  }
  cambiarContrasena(): void {
    alert('Cambiar contraseña');
  }
  descargarAviso(): void {
    alert('Descargar aviso personalizado');
  }
  irAvisoPrivacidad(): void {
    alert('Aviso de privacidad');
  }
  irTerminosCondiciones(): void {
    alert('Términos y condiciones');
  }
  salir(): void {
    alert('Saliendo de la plataforma...');
  }

  async agregarCedula(): Promise<void> {
    // Importación dinámica para diálogo
    const { CedulaDialogComponent } = await import('./cedula-dialog/cedula-dialog.component');
    const dialogRef = this.dialog.open(CedulaDialogComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.idCardService.addCedula(result);
      }
    });
  }

  async agregarClaveMedico(): Promise<void> {
    // Importación dinámica para diálogo
    const { ClaveMedicoDialogComponent } = await import('./clave-medico-dialog/clave-medico-dialog.component');
    const dialogRef = this.dialog.open(ClaveMedicoDialogComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.idCardService.addClaveMedico(result);
      }
    });
  }

  guardarPerfil(): void {
    this.calcularPorcentajePerfil();
    alert('Perfil guardado. Completado: ' + this.porcentajePerfil + '%');
  }
}
