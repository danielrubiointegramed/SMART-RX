import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface CpResponse {
  estado: string;
  municipio: string;
  colonias: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CpService {
  getDatosPorCP(cp: string): Observable<CpResponse> {
    // Simulación: en un caso real llamarías a un API.
    const response: CpResponse = {
      estado: 'Ciudad de México',
      municipio: 'Iztapalapa',
      colonias: ['Colonia A', 'Colonia B', 'Colonia C']
    };
    return of(response).pipe(delay(500));
  }
}
