import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmpleadosPespunte242Service {
// This service can now make HTTP requests via `this.http`.
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/EmpleadosPespunte242/pespunte242-hoy';

  constructor() {}

  getEmpleadosPespunte242(): Observable<any> {
     return this.http.get(this.apiUrl);
  }
}
