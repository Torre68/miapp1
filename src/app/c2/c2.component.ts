import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  imports: [NgFor],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {

  listaNombres:String []=[];

  pulsame (){

    //alert("¡Has Pulsado!");
    this.listaNombres.push("Manolo");
    console.log(this.listaNombres);
  }

}
