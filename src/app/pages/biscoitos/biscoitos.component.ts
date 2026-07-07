import { Component } from '@angular/core';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-biscoitos',
  imports: [RodapeComponent, RouterLink],
  templateUrl: './biscoitos.component.html',
  styleUrl: './biscoitos.component.css'
})
export class BiscoitosComponent {

}
