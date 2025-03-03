import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface CedulaInfo {
  cedula: string;
  especialidad: string;
  institucion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CedulaService {
  private cedulasMock: CedulaInfo[] = [
    { cedula: '1234567', especialidad: 'Cardiología', institucion: 'Institución X' },
    { cedula: '2345678', especialidad: 'Pediatría', institucion: 'Institución Y' },
  ];

  buscarCedula(cedula: string): Observable<CedulaInfo | null> {
    const found = this.cedulasMock.find(c => c.cedula === cedula);
    return of(found || null).pipe(delay(500));
  }
}
