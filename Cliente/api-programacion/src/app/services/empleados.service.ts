import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmpleadosService {
// This service can now make HTTP requests via `this.http`.
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/Empleado/general-hoy';


  constructor() {}

  getEmpleados(): Observable<any> {
     return this.http.get(this.apiUrl);
  }
}
