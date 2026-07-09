import { Component, Input, inject } from '@angular/core'; // 1. Adicionamos o 'inject' aqui
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-category-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category-header.component.html',
  styleUrl: './category-header.component.css'
})
export class CategoryHeaderComponent {
  // 2. INJETAMOS O ROUTER DO ANGULAR AQUI DENTRO 🔽
  private router = inject(Router);

  // Portas de entrada do componente com valores padrão
  @Input() titulo: string = 'Categoria';
  @Input() descricao: string = 'Confira nossos produtos pet.';

  logout() {
    // 1. Limpeza de sessão (se houver)
    // localStorage.removeItem('usuario_logado');
    
    // 2. Feedback para o usuário
    alert('Sessão encerrada com sucesso. Até a próxima investigação! 🚐💨');

    // 3. Redireciona para a raiz (sua tela de login)
    this.router.navigate(['']);
  }
}