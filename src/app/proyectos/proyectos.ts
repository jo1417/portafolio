import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  titulo: string = 'Mis Proyectos';

  proyectos = [
    {
      nombre: 'Barbería Maxi',
      imagen: 'proyecto1.png',
      descripcion: 'Sitio web para barbería diseñado para gestionar citas, mostrar servicios y productos, y permitir a los clientes seleccionar al barbero de su preferencia según su experiencia y especialidad.',
      url: 'https://github.com/jo1417/mi-proyecto-barberia.git'
    },
    {
      nombre: 'Tienda en Línea',
      imagen: 'proyecto2.png',
      descripcion: 'Sitio web de mueblería diseñado para mostrar productos por categorías y facilitar el contacto directo con el vendedor a través de WhatsApp para consultas, compras y solicitudes de crédito.',
      url: 'https://github.com/jo1417/mi-proyecto-tienda.git'
    },
    {
      nombre: 'Galería de Fotos',
      imagen: 'proyecto3.png',
      descripcion: 'Galería de imágenes estilo iOS que organiza y muestra fotografías tanto en una vista general como por categorías, ofreciendo una experiencia de navegación sencilla e intuitiva.',
      url: 'https://github.com/jo1417/mi-proyecto-galeria.git'
    }
  ];

   verProyecto(proyecto: any): void {
    window.open(proyecto.url, '_blank');
  }

}
