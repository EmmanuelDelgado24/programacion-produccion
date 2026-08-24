import { inject, Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pedido } from "../interfaces/pedidos.inteface";

@Injectable({providedIn: 'root'})
export class PedidoService {

  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7175/api/Pedido/crearPedido';
  private apiUrl2 = 'https://localhost:7175/api/Pedido/pedidos';

  constructor() {}

  getPedidos():Observable<any>{
    return this.http.get(this.apiUrl2);
  }

  postPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }
}
