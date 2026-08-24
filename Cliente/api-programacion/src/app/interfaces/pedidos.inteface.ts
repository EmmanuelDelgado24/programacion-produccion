import { Cliente } from "./clientes.interface";


export interface Pedido{
  id: number;
  pedidoCliente: number;
  pedidoInterno: string;
  semanaYFolioDeExplosion: string | number;
  fechaRealizacionExplosion: Date | string;
  fechaLiberacionExplosion: Date | string;
  semanaProgramada: number;
  construccion: string;
  coleccion: string;
  piel: string;
  colorBigZap: string;
  cantidadPares: number;
  statusModelo: string;
  fechaDePedido: Date | string;
  fechaDeEntrega: Date | string;
  cliente: Cliente;
  modelo: number;
  detallesNumeracion: DetalleNumeracion[];
}


export interface DetalleNumeracion {
  id: number;
  talla: number;
  cantidad: number;
  pedido_id: number;
}
