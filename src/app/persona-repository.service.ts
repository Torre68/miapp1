import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaRepositoryService {
 
  listaPersonas: Persona []=[];


  constructor() { 

    this.listaPersonas.push(new Persona("pepe","perez",30));
    this.listaPersonas.push(new Persona("juan","sanchez",35));
    this.listaPersonas.push(new Persona("manolo","saurio",40));


  }
  
  public buscarTodos (): Persona []{

    return this.listaPersonas;
  }
  public insertar (persona:Persona): void {

    this.listaPersonas.push(persona);
  }

  public filtrarNombre (nombre:string): Persona[] {


 return this.listaPersonas.filter((p)=>p.nombre.startsWith(nombre));
  }

  public borrar (nombre:string) {

    //this.listaPersonas.filter((p)=>!p.nombre.startsWith(nombre)); OR

    let indice=this.listaPersonas.findIndex((p)=>p.nombre==nombre);
    this.listaPersonas.splice(indice,1);
  }

}


