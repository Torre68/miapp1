import { Component } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';
import { PersonaRepositoryService } from '../persona-repository.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-personas',
  imports: [NgFor, FormsModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {

  listaPersonas: Persona []=[];
  personaInsertar: Persona={} as Persona;
  filtroNombre:string="";

  constructor (private personaRepository:PersonaRepositoryService){

    this.listaPersonas=personaRepository.buscarTodos();

    
  }
  insertar (){
    //spread operator
    this.personaRepository.insertar({...this.personaInsertar});  }

    filtrar () {

      this.listaPersonas= this.personaRepository.filtrarNombre(this.filtroNombre);
    }

    borrar (nombre:string){

      
      this.personaRepository.borrar(nombre);
    }


  

}
