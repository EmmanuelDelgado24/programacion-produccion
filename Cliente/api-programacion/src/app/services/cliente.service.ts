import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/clientes.interface';

@Injectable({providedIn: 'root'})
export class ClienteService {
// This service can now make HTTP requests via `this.http`.
  private http = inject(HttpClient);
  private apiUrlGet = 'https://localhost:7175/api/Cliente';
  private apiUrlPost = 'https://localhost:7175/api/Cliente/crearCliente';
  private apiUrlPut = 'https://localhost:7175/api/Cliente/actualizarCliente';
  private apiUrlDelete = 'https://localhost:7175/api/Cliente/eliminarCliente';


  constructor() {}

  getClientes(): Observable<any> {
     return this.http.get(this.apiUrlGet);
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrlPost, cliente);
  }

  putCliente(id: number, cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiUrlPut}/${id}`, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlDelete}/${id}`);
  }
}
