import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmpleadosAdornoService{
   private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/EmpleadosAdorno/adorno-hoy';


  constructor() {}

  getEmpleadosAdorno(): Observable<any> {
     return this.http.get(this.apiUrl);
  }
}
