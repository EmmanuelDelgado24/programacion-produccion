import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmpleadosCorteService {
// This service can now make HTTP requests via `this.http`.
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/EmpleadosCorte/corte-hoy';


  constructor() {}

  getEmpleadosCorte(): Observable<any> {
     return this.http.get(this.apiUrl);
  }
}
