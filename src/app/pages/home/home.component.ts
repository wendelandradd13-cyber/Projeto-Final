import { Component, inject } from '@angular/core'; 
import { Router, RouterLink } from "@angular/router";
import { RodapeComponent } from '../../componentes/rodape/rodape.component';


@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink, RodapeComponent,], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  private router = inject(Router);

  logout() {
    alert('Sessão encerrada com sucesso. Até a próxima investigação! 🚐💨');
    this.router.navigate(['']);
  }
}