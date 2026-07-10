import { Component, inject } from '@angular/core'; 
import { Router, RouterLink } from "@angular/router";
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink, RodapeComponent, LoginComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  private router = inject(Router);


  // Variável que controla se o componente deve aparecer
  exibirComponente = false;

  ligarMaquinaDoMisterio() {
    this.exibirComponente = true;
  }

  entrar() {
    alert('Encontramos uma pista! Digite seu usuário e senha para acessar os arquivos do caso. 🔍📁');
    this.router.navigate(['/login']);
  }

  logout() {
    alert('Sessão encerrada com sucesso. Até a próxima investigação! 🚐💨');
    this.router.navigate(['']);
  }
}