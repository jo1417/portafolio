import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

   menuAbierto = signal(false);

  toggleMenu() {
    this.menuAbierto.update((value:boolean) => !value);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }

      temaOscuro = false;

toggleTema() {
  this.temaOscuro = !this.temaOscuro;

  if (this.temaOscuro) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
    

} } 
