import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';

@Component({
  selector: 'app-linha-antimonstro',
  imports: [RouterLink, RodapeComponent],
  templateUrl: './linha-antimonstro.component.html',
  styleUrl: './linha-antimonstro.component.css'
})
export class LinhaAntimonstroComponent {

}
