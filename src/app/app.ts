import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Inicio } from "./inicio/inicio";
import { Sobremi } from './sobremi/sobremi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from "./contacto/contacto";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Inicio, Sobremi, Proyectos, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miportafolio07');
}
