import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';

@Component({
  selector: 'app-maquina-misterio',
  imports: [RouterLink, RodapeComponent, CategoryHeaderComponent],
  templateUrl: './maquina-misterio.component.html',
  styleUrl: './maquina-misterio.component.css'
})
export class MaquinaMisterioComponent {

}
