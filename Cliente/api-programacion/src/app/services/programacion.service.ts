import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Programaciones } from "../interfaces/programacion.interface";

@Injectable({providedIn: 'root'})
export class ProgramacionService {

  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/Programacion/CrearProgramacion';
  private apiUrl2 = 'https://localhost:7175/api/Programacion/programacion';

  constructor() {}

  getProgramacion():Observable<Programaciones[]>{
    return this.http.get<Programaciones[]>(this.apiUrl2);
  }

  postProgramacion(programacion: Programaciones[]): Observable<Programaciones[]> {
    return this.http.post<Programaciones[]>(this.apiUrl, programacion);
  }
}
