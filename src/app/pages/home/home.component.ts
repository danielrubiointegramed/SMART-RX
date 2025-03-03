import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';

// Interfaces
import { BagItem, Medication } from '../../core/interfaces/medication.interface';
import { Cedula, ClaveMedico } from '../../core/interfaces/idcard.interface';

// Servicios y diálogos
import { IdCardService } from '../../services/idcard.service';
import { PrescriptionDialogComponent } from './prescription-dialog/prescription-dialog.component';
import { NominaDialogComponent } from './nomina-dialog/nomina-dialog.component';
import { ClaveMedicoDialogComponent } from '../../medico-profile/clave-medico-dialog/clave-medico-dialog.component';
import { CedulaDialogComponent } from '../../medico-profile/cedula-dialog/cedula-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = 'light-theme';
  isDark = false;
  drawerOpen = false;
  bagOpen = false;

  // Datos de usuario
  userName = 'Daniel';
  userSubtitle = 'Doctor';

  // ID Cards
  cedulas: Cedula[] = [];
  clavesMedico: ClaveMedico[] = [];
  selectedCedula: Cedula | null = null;
  selectedClave: ClaveMedico | null = null;

  // Búsqueda de medicamentos
  searchTerm = '';
  searchResults: Medication[] = [];

  // Lista fija de medicamentos
  medications: Medication[] = [
    {
      nombreComercial: 'ASPIRINA PROTECT 100 MG TAB 28',
      principioActivo: 'ACETILSALICILICO, ACIDO',
      laboratorio: 'BAYER PHARMA',
      estatus: 'Disponible',
    },
    {
      nombreComercial: 'Aspirina 500mg TAB 100',
      principioActivo: 'ACETILSALICILICO, ACIDO',
      laboratorio: 'BAYER CONSUMO',
      estatus: 'Disponible / Requiere CAT',
    },
    {
      nombreComercial: 'Ibuprofeno 400mg TAB',
      principioActivo: 'IBUPROFENO',
      laboratorio: 'MediLab',
      estatus: 'En reposición',
    },
    {
      nombreComercial: 'Amoxicilina 500mg',
      principioActivo: 'AMOXICILINA',
      laboratorio: 'Sanfer',
      estatus: 'No Autorizado / Faltante',
    },
  ];

  // Bolsa de medicamentos (inicialmente vacía)
  bagItems: BagItem[] = [];

  /**
   * El getter bagCount suma la cantidad de cada ítem en la bolsa.
   */
  get bagCount(): number {
    return this.bagItems.reduce((acc, item) => acc + item.cantidad, 0);
  }

  constructor(
    public router: Router,
    private dialog: MatDialog,
    private idCardService: IdCardService,
  ) {}

  ngOnInit(): void {
    this.idCardService.cedulas$.subscribe(data => this.cedulas = data);
    this.idCardService.claves$.subscribe(data => this.clavesMedico = data);
  }

  ngOnDestroy(): void {
    // Aquí puedes limpiar las suscripciones si es necesario.
  }

  /* ==================== Tema Claro/Oscuro ==================== */
  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.className = this.isDark ? 'dark-theme' : 'light-theme';
  }

  /* ==================== Drawer izquierdo (Menú lateral) ==================== */
  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }
  cambiarContrasena(): void {
    this.router.navigate(['/auth/recovery']);
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

  /* ==================== Drawer derecho (Bolsa de medicamentos) ==================== */
  toggleBag(): void {
    this.bagOpen = !this.bagOpen;
  }
  descargarReceta(): void {
    alert('Descargando receta...');
  }
  vaciarBag(): void {
    this.bagItems = [];
    alert('Bolsa vaciada');
  }
  actualizarBolsa(): void {
    alert('Bolsa actualizada');
  }
  enviarReceta(): void {
    alert('Enviando receta...');
  }

  /* ==================== Búsqueda de Medicamentos ==================== */
  async buscarMedicamento(): Promise<void> {
    const term = this.searchTerm.trim().toLowerCase();
    this.searchResults = term
      ? this.medications.filter(med =>
          med.nombreComercial.toLowerCase().includes(term)
        )
      : [];
  }

 /* ==================== Manejo de ID Card ==================== */
openAddIdCardDialog(type: 'cedula' | 'clave'): void {
  if (type === 'cedula') {
    const dialogRef = this.dialog.open(CedulaDialogComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cedulas.push(result);
      }
    });
  } else {
    const dialogRef = this.dialog.open(ClaveMedicoDialogComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clavesMedico.push(result);
      }
    });
  }
}


  /* ==================== Selección de Medicamento ==================== */
  async seleccionar(med: Medication): Promise<void> {
    const dialogRef1 = this.dialog.open(PrescriptionDialogComponent, {
      width: '600px',
      data: { medicamento: med },
    });
    dialogRef1.afterClosed().subscribe(prescripcionData => {
      if (prescripcionData) {
        const dialogRef2 = this.dialog.open(NominaDialogComponent, {
          width: '600px',
          data: { medicamento: med, prescripcion: prescripcionData },
        });
        dialogRef2.afterClosed().subscribe(nominaData => {
          if (nominaData) {
            // Convertir prescripcionData.cantidad a número; si falla, asignar 1.
            const cantidad = Number(prescripcionData.cantidad) || 1;
            const item: BagItem = {
              nombreComercial: med.nombreComercial,
              cantidad: cantidad,
            };
            this.bagItems.push(item);
            alert('Medicamento agregado a la bolsa con prescripción y nómina.');
          }
        });
      }
    });
  }

  reportar(med: Medication): void {
    alert(`Reportaste: ${med.nombreComercial}`);
  }

  /* ==================== Funciones de Apoyo (Tablas) ==================== */
  getRowClass(estatus: string): string {
    const lower = estatus.toLowerCase();
    if (lower.includes('disponible') && !lower.includes('cat')) return 'green-row';
    if (lower.includes('cat')) return 'yellow-row';
    if (lower.includes('no autorizado') || lower.includes('faltante')) return 'pink-row';
    if (lower.includes('reposicion')) return 'orange-row';
    return '';
  }
  isQuestionMarkStatus(estatus: string): boolean {
    const lower = estatus.toLowerCase();
    return lower.includes('cat') || lower.includes('faltante') || lower.includes('no autorizado');
  }
  getStatusTooltip(estatus: string): string {
    const lower = estatus.toLowerCase();
    if (lower.includes('cat')) {
      return 'El producto se encuentra disponible pero es necesario solicitar CAT.';
    }
    if (lower.includes('faltante') || lower.includes('no autorizado')) {
      return 'El producto se encuentra en faltantes o no autorizado.';
    }
    return '';
  }

  /* ==================== Funciones para la Bolsa ==================== */
  deleteItem(index: number): void {
    this.bagItems.splice(index, 1);
  }
  updateItem(index: number): void {
    console.log('Item actualizado:', this.bagItems[index]);
  }
  sumarItem(index: number): void {
    const currentVal = Number(this.bagItems[index].cantidad) || 0;
    this.bagItems[index].cantidad = currentVal + 1;
    console.log('Nuevo valor para el ítem:', this.bagItems[index].cantidad);
  }
}
