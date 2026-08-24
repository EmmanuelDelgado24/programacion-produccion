export interface Programaciones{
   idPedido: number;
   cliente: string;
   semana: number;
   departamento: string;
   linea: string;
   dia: string;
   modelo: number;
   demandaDia: number;
   personal: number;
   minutosDispo: number;
   tiempoEst: number;
   capacidadDia: number;
   cargaDia: number;
   saturacion: number;
   capacidadReal: number;
   programacionIdeal: number;
   deficit: number;
   detallesNumeracion?: DetalleNumeracion[];
}

export interface DetalleNumeracion {
  talla: number;
  cantidad: number;
}
