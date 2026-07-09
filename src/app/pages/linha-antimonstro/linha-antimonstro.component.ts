import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';

@Component({
  selector: 'app-linha-antimonstro',
  imports: [RouterLink, RodapeComponent, CategoryHeaderComponent],
  templateUrl: './linha-antimonstro.component.html',
  styleUrl: './linha-antimonstro.component.css'
})
export class LinhaAntimonstroComponent {

}
