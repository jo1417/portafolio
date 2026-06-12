import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

items = [
    {
nombre: 'Hola, soy John Duque.',
profesion: 'Tecnologo En Desarrollo De Software',
descripcion: 'Me gusta la tecnología y todo lo relacionado con el desarrollo web. He dedicado tiempo a crear proyectos personales que me han ayudado a fortalecer mis conocimientos y seguir aprendiendo. Mi objetivo es continuar creciendo profesionalmente, adquirir experiencia y convertir mi pasión por el desarrollo en una carrera sólida.',
fotoPerfil:'perfil1.png'
}
    ];

}
