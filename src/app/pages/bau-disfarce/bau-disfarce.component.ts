import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importado o Router
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';
import { AuthService } from '../../componentes/services/auth.service';
import { CarrinhoService } from '../../componentes/services/carrinho.service'; // 2. Importado o CarrinhoService

@Component({
  selector: 'app-bau-disfarce',
  standalone: true, // Garante que as imports funcionem no modelo Standalone
  imports: [RodapeComponent, CategoryHeaderComponent],
  templateUrl: './bau-disfarce.component.html',
  styleUrl: './bau-disfarce.component.css'
})
export class BauDisfarceComponent {
  // 3. Injeção correta e moderna dos 3 serviços necessários
  private authService = inject(AuthService);
  private carrinhoService = inject(CarrinhoService);
  private router = inject(Router);

  comprarProduto(nome: string, preco: number) {
    // 1. Verifica se o detetive está logado
    if (!this.authService.isAuthenticated) {
      alert('Acesso negado, faça o login primeiro para usar o carrinho! 🚐');
      return;
    }

    // 2. Cria o item com os dados vindos do HTML
    const novoItem = {
      id: Date.now(),
      nome: nome,
      preco: preco
    };

    // 3. Salva no serviço e muda de página
    this.carrinhoService.adicionarAoCarrinho(novoItem);
    this.router.navigate(['/sucesso-compra']);
  }
}