import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Inyecciones } from "../interfaces/modelosInyeccion.interface";
import { map } from "rxjs/internal/operators/map";

@Injectable({providedIn: 'root'})

export class ModelosInyeccionService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosInyeccion/inyeccion';
  private apiUrlesti = 'https://localhost:7175/api/ModelosInyeccion/modelo';

  constructor() {}

  getModelosInyeccion(): Observable<Inyecciones[]> {
       return this.http.get<Inyecciones[]>(this.apiUrl);
    }

  getModelosInyeccionEstilo(modelo: string): Observable<Inyecciones[]> {
    return this.http.get<Inyecciones>(`${this.apiUrlesti}/${modelo}`).pipe(
      map(res => [res])
    );
  }
}
