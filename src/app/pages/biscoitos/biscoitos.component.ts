import { Component } from '@angular/core';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { RouterLink } from "@angular/router";
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';

@Component({
  selector: 'app-biscoitos',
  imports: [RodapeComponent, RouterLink, CategoryHeaderComponent],
  templateUrl: './biscoitos.component.html',
  styleUrl: './biscoitos.component.css'
})
export class BiscoitosComponent {

}
