import { Component } from '@angular/core';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { RouterLink } from '@angular/router';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';

@Component({
  selector: 'app-salsicha-cia',
  imports: [RodapeComponent, RouterLink, CategoryHeaderComponent],
  templateUrl: './salsicha-cia.component.html',
  styleUrl: './salsicha-cia.component.css'
})
export class SalsichaCiaComponent {

}
