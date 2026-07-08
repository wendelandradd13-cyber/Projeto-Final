import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';

@Component({
  selector: 'app-bau-disfarce',
  imports: [RouterLink, RodapeComponent],
  templateUrl: './bau-disfarce.component.html',
  styleUrl: './bau-disfarce.component.css'
})
export class BauDisfarceComponent {

}
