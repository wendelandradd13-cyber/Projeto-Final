import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';

@Component({
  selector: 'app-bau-disfarce',
  imports: [RouterLink, RodapeComponent, CategoryHeaderComponent],
  templateUrl: './bau-disfarce.component.html',
  styleUrl: './bau-disfarce.component.css'
})
export class BauDisfarceComponent {

}
