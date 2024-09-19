import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = "Listado de Personas";
  personas: Persona[] = [
    new Persona("Juan", "Perez"),
    new Persona("Laura", "Suarez"),
    new Persona("Andres", "Bustos"),
    new Persona("Maria", "Torres")
  ];
  nombreInput: string = "";
  apellidoInput: string = "";

  agregarPersona(): void {
    let personaUno = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(personaUno)
  }
}
