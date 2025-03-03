// medication.interface.ts

export interface Medication {
  nombreComercial: string;
  principioActivo: string;
  laboratorio: string;
  estatus: string;
}

export interface BagItem {
  nombreComercial: string;
  cantidad: number;
}
