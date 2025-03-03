export interface Cedula {
  type: 'cedula';
  cedula: string;
  especialidad: string;
  institucion: string;
}

export interface ClaveMedico {
  type: 'clave';
  aseguradora: string;
  institucion: string;
  clave: string;
}

// Tipo unificado para la identificación del doctor
export type DoctorIdCard = Cedula | ClaveMedico;
