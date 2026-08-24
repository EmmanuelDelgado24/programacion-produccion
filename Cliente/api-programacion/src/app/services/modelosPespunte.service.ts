import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Pespuntes } from "../interfaces/modelosPespunte.interface";
import { map } from "rxjs/internal/operators/map";

@Injectable({providedIn: 'root'})

export class ModelosPespunteService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosPespunte/pespunte';
  private apiUrlesti = 'https://localhost:7175/api/ModelosPespunte/modelo';

  constructor() {}

  getModelosPespunte(): Observable<Pespuntes[]> {
       return this.http.get<Pespuntes[]>(this.apiUrl);
    }

  getModelosPespunteEstilo(modelo: string): Observable<Pespuntes[]> {
    return this.http.get<Pespuntes>(`${this.apiUrlesti}/${modelo}`).pipe(
      map(res => [res])
    );
  }
}
