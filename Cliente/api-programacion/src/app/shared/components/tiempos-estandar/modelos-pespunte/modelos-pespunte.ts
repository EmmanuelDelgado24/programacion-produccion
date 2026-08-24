import { Component, Input} from '@angular/core';
import { Pespuntes } from '../../../../interfaces/modelosPespunte.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modelos-pespunte',
  imports: [CommonModule],
  templateUrl: './modelos-pespunte.html',
  styleUrl: './modelos-pespunte.css',
})
export class ModelosPespunte {

  @Input() listaPespunte: Pespuntes[] = [];
}
