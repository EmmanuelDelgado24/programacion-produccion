import { Component, inject, Input } from '@angular/core';
import { Cliente } from '../../../interfaces/clientes.interface';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../services/cliente.service';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-tabla-clientes',
  imports: [CommonModule, Modal],
  templateUrl: './tabla-clientes.html',
  styleUrl: './tabla-clientes.css',
})
export class TablaClientes {
  @Input() listadoClientes: Cliente[] = [];

  private clienteService = inject(ClienteService);

  // Variable para guardar el cliente que se va a editar
  clienteSeleccionado: Cliente | null = null;

  isModalOpen = false;

  openModal(cliente: Cliente) {
    //  { ...cliente } operador de propagación Esto crea una nueva copia del objeto cliente,
    // lo que es importante para evitar mutaciones no deseadas en el objeto original cuando se edite el cliente en el modal.
    this.clienteSeleccionado = { ...cliente };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.clienteSeleccionado = null;
  }


  editCliente(cliente: Cliente) {
    this.clienteService.putCliente(cliente.id, cliente).subscribe({
      next: (res) => {
        console.log('Cliente actualizado:', res);
      }
    });
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe({
      next: () => {
        console.log('Cliente eliminado successfully:', id);
      }
    });
  }

}
