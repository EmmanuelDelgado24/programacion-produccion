import { WritableSignal } from "@angular/core";

export interface Fila {
  uuid: string;
  idPedido: number;
  cliente: string;
  semana: number;
  departamento: string;
  linea: string;
  dia: string;
  modelo: WritableSignal<string>;
  talla5Pares: WritableSignal<number>;
  talla55Pares: WritableSignal<number>;
  talla6Pares: WritableSignal<number>;
  talla65Pares: WritableSignal<number>;
  talla7Pares: WritableSignal<number>;
  talla75Pares: WritableSignal<number>;
  talla8Pares: WritableSignal<number>;
  talla85Pares: WritableSignal<number>;
  talla9Pares: WritableSignal<number>;
  talla95Pares: WritableSignal<number>;
  talla10Pares: WritableSignal<number>;
  talla105Pares: WritableSignal<number>;
  talla11Pares: WritableSignal<number>;
  demandaDia: WritableSignal<number>;
  personal: WritableSignal<number>;
  minutosDisponibles: WritableSignal<number | null>;
  tiempoEstandar: WritableSignal<number | null>;
  capacidadDia: WritableSignal<number>;
  cargaDia: WritableSignal<number>;
  saturacion: WritableSignal<number>;
  capacidadDepartamento: WritableSignal<number>;
  programacionIdeal: WritableSignal<number>;
  deficit: WritableSignal<number>;
  buscando: WritableSignal<boolean>;
  errorBusqueda: WritableSignal<boolean>;
}
