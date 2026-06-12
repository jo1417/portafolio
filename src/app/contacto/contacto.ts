import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {
  
  titulo: string = 'Contáctame';

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarWhatsApp(){

    //me ayuda a validar los campos que si tengan informacion
    //  y no quede vacio en el campo de mi formulario de conctato,
    //  para que el usuario sepa que debe llenar los campos requeridos antes de enviar el mensaje por WhatsApp
    if (!this.nombre || !this.mensaje) {
      alert(' completa los campos requeridos');
      return;// Detiene la ejecución de la función si algún campo está vacío
    }

    const numero = '573046637509';
    const texto = `Hola, soy ${this.nombre}. Mi correo es ${this.correo}. Mensaje: ${this.mensaje}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
  }
}