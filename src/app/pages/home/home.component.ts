import { Component, inject } from '@angular/core'; 
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { LoginComponent } from "../login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";
import { AuthService } from '../../componentes/services/auth.service';


@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink, RodapeComponent, LoginComponent, RouterOutlet, CadastroComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private authService = inject(AuthService);
  private router = inject(Router);


 // Pode ser: 'nenhuma', 'login' ou 'cadastro'
  telaAtiva: 'nenhuma' | 'login' | 'cadastro' = 'nenhuma';

  ligarMaquinaDoMisterio() {
    this.telaAtiva = 'login'; // Abre o login primeiro
    }

  entrar() {
    alert('Encontramos uma pista! Digite seu usuário e senha para acessar os arquivos do caso. 🔍📁');
    this.router.navigate(['/login']);
  }

  logout() {
    alert('Sessão encerrada com sucesso. Até a próxima investigação! 🚐💨');
    this.router.navigate(['']);
  }
   servico()
   { if (!this.authService.isAuthenticated) {
      alert('Acesso negado, faça o login primeiro ');
    } else{
      this.router.navigate(['/area-tutor'])
    }}
  
}