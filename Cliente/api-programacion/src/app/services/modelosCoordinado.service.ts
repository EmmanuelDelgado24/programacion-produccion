import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Coordinados } from "../interfaces/modelosCoordinado.interface";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ModelosCoordinadoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosCoordinado/coordinado';
  private apiUrlesti = 'https://localhost:7175/api/ModelosCoordinado/modelo';

  constructor() { }

  getModelosCoordinado(): Observable<Coordinados[]> {
    return this.http.get<Coordinados[]>(this.apiUrl);

  }

  getModelosCoordinadoEstilo(modelo: string): Observable<Coordinados[]> {
    return this.http.get<Coordinados>(`${this.apiUrlesti}/${modelo}`).pipe(
      map(res => [res])
    );
  }
}
