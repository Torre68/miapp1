import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c3',
  imports: [],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component {

  persona:Persona;
  constructor(){

    this.persona= new Persona("juan","gomez",18)

  }

}
