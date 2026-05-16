import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

nombre: string = 'soy john duque';
profesion: string = 'Tecnologo En Desarrollo De Software';
descripcion: string = 'Soy un tecnólogo en desarrollo de software apasionado por la tecnología y la creación de soluciones web. Aunque no cuento con experiencia laboral, he desarrollado proyectos personales que reflejan mi compromiso y mis ganas de seguir aprendiendo.    Busco una oportunidad para crecer profesionalmente y aportar valor con mis habilidades.';
}
