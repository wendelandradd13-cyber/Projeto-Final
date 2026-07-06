import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RodapeComponent } from '../../componentes/rodape/rodape.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
