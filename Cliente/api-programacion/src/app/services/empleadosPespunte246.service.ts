import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmpleadosPespunte246Service {
// This service can now make HTTP requests via `this.http`.
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/EmpleadosPespunte246/pespunte246-hoy';

  constructor() {}

  getEmpleadosPespunte246(): Observable<any> {
     return this.http.get(this.apiUrl);
  }
}
