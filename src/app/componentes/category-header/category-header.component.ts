import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-category-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category-header.component.html',
  styleUrl: './category-header.component.css'
})
export class CategoryHeaderComponent {
  private router = inject(Router);
  private authService = inject(AuthService); // 2. Injete o AuthService aqui

  @Input() titulo: string = 'Categoria';
  @Input() descricao: string = 'Confira nossos produtos pet.';

  logout() {
    // 3. Chama o logout do serviço (ele limpa o localStorage['app_user'] e o estado)
    this.authService.logout();
    
    // 4. Feedback para o usuário
    alert('Sessão encerrada com sucesso. Até a próxima investigação! 🚐💨');

    // 5. Redireciona para a raiz (sua tela de login/home)
    this.router.navigate(['']);
  }
}