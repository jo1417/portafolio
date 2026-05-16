import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true, // ⚡ componente independiente
  imports: [FormsModule], // ⚡ aquí se importan módulos que usa el componente
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarWhatsApp() {
    if (!this.nombre || !this.mensaje) {
      alert('Por favor completa los campos requeridos');
      return;
    }
    const numero = '573046637509';
    const texto = 'Hola, soy ${this.nombre}. Mi correo es ${this.correo}. Mensaje: ${this.mensaje}';
    const url = 'https://wa.me/${numero}?text=${encodeURIComponent(texto)}';
    window.open(url, '_blank');
  }
}