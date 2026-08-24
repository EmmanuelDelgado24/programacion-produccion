import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Plantillas } from "../interfaces/modelosPlantilla.interface";
import { map } from "rxjs/internal/operators/map";

@Injectable({providedIn: 'root'})

export class ModelosPlantillaService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/ModelosPlantilla/plantilla';
  private apiUrlesti = 'https://localhost:7175/api/ModelosPlantilla/modelo';

  constructor() {}

  getModelosPlantilla(): Observable<Plantillas[]> {
       return this.http.get<Plantillas[]>(this.apiUrl);
    }

  getModelosPlantillaEstilo(modelo: string): Observable<Plantillas[]> {
    return this.http.get<Plantillas>(`${this.apiUrlesti}/${modelo}`).pipe(
      map(res => [res])
    );
  }
}
