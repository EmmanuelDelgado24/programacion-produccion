import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPedidos } from '../../shared/components/tabla-pedidos/tabla-pedidos';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../interfaces/pedidos.inteface';


@Component({
  selector: 'app-pedidos',
  imports: [CommonModule, TablaPedidos],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos {

  private pedidoService = inject(PedidoService);

  pedidos:Pedido[] = [];

  cargando = true;
  error = false;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.pedidoService.getPedidos().subscribe({
      next: (res) => {
        this.pedidos = res;
        this.cargando = false;
        console.log('cargando después:', this.pedidos);
        console.log('Pedidos obtenidos correctamente:', this.pedidos.length);
        console.log('Pedidos obtenidos correctamente');
        this.cdr.detectChanges();
        },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener Pedidos', err);
      }
    });
  }
}
