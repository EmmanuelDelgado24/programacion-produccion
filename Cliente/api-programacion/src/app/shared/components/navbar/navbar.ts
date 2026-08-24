import { Component, afterNextRender } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { routes } from '../../../app.routes';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor() {
    afterNextRender(() => {
      initFlowbite();
    });
  }
}
