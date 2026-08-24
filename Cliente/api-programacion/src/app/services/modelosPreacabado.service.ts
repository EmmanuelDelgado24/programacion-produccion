import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Preacabados } from "../interfaces/modelosPreacabado.interface";
import { map } from "rxjs/internal/operators/map";

@Injectable({providedIn: 'root'})

export class ModelosPreacabadoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosPreacabado/preacabado';
  private apiUrlesti = 'https://localhost:7175/api/ModelosPreacabado/modelo';

  constructor() {}

  getModelosPreacabado(): Observable<Preacabados[]> {
       return this.http.get<Preacabados[]>(this.apiUrl);
    }

  getModelosPreacabadoEstilo(modelo: string): Observable<Preacabados[]> {
    return this.http.get<Preacabados>(`${this.apiUrlesti}/${modelo}`).pipe(
      map(res => [res])
    );
  }
}
