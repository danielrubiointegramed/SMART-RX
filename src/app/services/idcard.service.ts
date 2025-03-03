import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cedula, ClaveMedico } from '../core/interfaces/idcard.interface';
 // Ajusta la ruta según tu proyecto

@Injectable({
  providedIn: 'root'
})
export class IdCardService {
  private cedulasSubject = new BehaviorSubject<Cedula[]>([]);
  cedulas$ = this.cedulasSubject.asObservable();

  private clavesSubject = new BehaviorSubject<ClaveMedico[]>([]);
  claves$ = this.clavesSubject.asObservable();

  get cedulas(): Cedula[] {
    return this.cedulasSubject.value;
  }

  get clavesMedico(): ClaveMedico[] {
    return this.clavesSubject.value;
  }

  addCedula(cedula: Cedula): void {
    this.cedulasSubject.next([...this.cedulas, cedula]);
  }

  removeCedula(index: number): void {
    const updated = [...this.cedulas];
    updated.splice(index, 1);
    this.cedulasSubject.next(updated);
  }

  addClaveMedico(clave: ClaveMedico): void {
    this.clavesSubject.next([...this.clavesMedico, clave]);
  }

  removeClaveMedico(index: number): void {
    const updated = [...this.clavesMedico];
    updated.splice(index, 1);
    this.clavesSubject.next(updated);
  }
}
