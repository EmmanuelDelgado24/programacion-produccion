import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Cortes } from "../interfaces/modelosCorte.interface";
import { map } from "rxjs/internal/operators/map";

@Injectable({providedIn: 'root'})

export class ModelosCorteService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosCorte/corte';
  private apiUrlesti = 'https://localhost:7175/api/ModelosCorte/modelo';

  constructor() {}

  getModelosCorte(): Observable<Cortes[]> {
       return this.http.get<Cortes[]>(this.apiUrl);
  }

  getModelosCorteEstilo(modelo: string): Observable<Cortes[]> {
      return this.http.get<Cortes>(`${this.apiUrlesti}/${modelo}`).pipe(
        map(res => [res])
      );
  }
}
