import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, C1Component, C2Component, C3Component, ListaPersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miapp1';
 
}
