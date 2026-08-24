import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../../interfaces/pedidos.inteface';

@Component({
  selector: 'app-tabla-pedidos',
  imports: [CommonModule],
  templateUrl: './tabla-pedidos.html',
  styleUrl: './tabla-pedidos.css',
})
export class TablaPedidos {
  @Input() listadoPedidos: Pedido[] = [];

  sumarPares(pedido: Pedido): number {

    //si el pedido no tiene detalles de numeración o el arreglo está vacío, retornamos 0
    if (!pedido.detallesNumeracion || pedido.detallesNumeracion.length === 0) {
        return 0;
    }

    //usamos reduce para sumar la cantidad de pares en todos los detalles de numeración del pedido
    const total = pedido.detallesNumeracion.reduce((acc, detalle) => acc + detalle.cantidad, 0);
    return total;
  }


  //esta función recibe un pedido y una talla buscada, y retorna la cantidad de pares para esa talla específica
  getTallaCant(pedido: Pedido, tallaBuscada: number): number | string {
    const detalle = pedido.detallesNumeracion?.find(
      d => d.talla === tallaBuscada);
    return detalle ? detalle.cantidad : 'N/A';
  }
}
