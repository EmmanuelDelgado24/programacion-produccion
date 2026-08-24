import { ChangeDetectorRef, Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaClientes } from '../../shared/components/tabla-clientes/tabla-clientes';
import { Cliente } from '../../interfaces/clientes.interface';
import { Modal } from '../../shared/components/modal/modal';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, TablaClientes, Modal],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {

  cliente: Cliente[] = [];

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  private clienteService = inject(ClienteService);

  private cdr = inject(ChangeDetectorRef);

  nombreCliente = input<string>();

  nombre = signal('');
  id = signal(0);

  clien = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.clienteService.getClientes().subscribe({
      next: (res) => {
        this.cliente = res;
        this.clien.set(this.cliente.length);
        this.cargando = false;
        console.log('cargando después:', this.cliente);
        console.log('clientes:', this.cliente.length);

        console.log('Clientes obtenidos correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener clientes', err);
      }
    });
  }

  addCliente() {
    this.clienteService.postCliente({ id: this.id(), nombre: this.nombre() }).subscribe({
      next: (res) => {
        console.log('Cliente agregado:', res);
      }
    });
  }
}
