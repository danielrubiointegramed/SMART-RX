import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'https://api.integramed.mx'; /* produccion*/
  //private apiUrl: string = 'http://api-cloud.local'; /* local */
  private env_api = localStorage.getItem('enviroment');

  constructor(private http: HttpClient) { }

  /**
   * @param 1 ó Default:Personas-Jefe
   * @param 2:Departamento
   * @param 3:Ocupación-Puesto de trabajo
   * @param 4:Branch
   **/
  dataUsers(metodo: any) {
    const headers = { 'Content-Type': 'application/json' };
    const body = {
      "environment": this.env_api,
    };
    return this.http.post(this.apiUrl + '/agreements/getdatauser/'+metodo, body, { headers });
  }

  UserRegistration(datos: any, permisos:any,addemployee:any){
    const headers = { 'Content-Type': 'application/json' };
    const body = {
      "name": datos["name"],
      "lastname": datos["lastname"],
      "surename": datos["surename"],
      "email": datos["email"],
      "bossnumber":datos["bossnumber"],
      "workstation": datos["workstation"],
      "departament": datos["departament"],
      "tel": datos["tel"],
      "employeeno": datos["employeeno"],
      "gender": datos["gender"],
      "branch": datos["branch"],
      "userroot": datos["userroot"],
      "screens":permisos,
      "environment": this.env_api,
      "useradd":addemployee
    };
    return this.http.post(this.apiUrl + '/agreements/userregistration', body, { headers });
  }

  dataLicenses(metodo: any,param:any) {
    const headers = { 'Content-Type': 'application/json' };
    const body = {
      "environment": this.env_api,
      "param": param
    };
    return this.http.post(this.apiUrl + '/agreements/getdatauser/'+metodo, body, { headers });
  }

  cambioSucursal(newbranch: string, employeechange: string){
    const headers = { 'Content-Type': 'application/json' };
    const cedule = localStorage.getItem('cedule');
    const body = {
      "cedule": cedule,
      "newbranch": newbranch,
      "employeechange": employeechange,
      "environment": this.env_api
    };
    return this.http.post(this.apiUrl + '/changebranch', body, { headers });
  }
}
