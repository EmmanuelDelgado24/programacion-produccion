import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Montados } from "../interfaces/modelosMontado.interface";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})

export class ModelosMontadoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosMontado/montado';
  private apiUrlesti = 'https://localhost:7175/api/ModelosMontado/modelo';

  constructor() {}

  getModelosMontado(): Observable<Montados[]> {
       return this.http.get<Montados[]>(this.apiUrl);
    }
  getModelosMontadoEstilo(modelo: string): Observable<Montados[]> {
    return this.http.get<Montados>(`${this.apiUrlesti}/${modelo}`).pipe(
          map(res => [res])
        );
  }
}
