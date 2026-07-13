import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importamos o Router para redirecionar
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';
import { AuthService } from '../../componentes/services/auth.service';
import { CarrinhoService } from '../../componentes/services/carrinho.service'; // 2. Importamos o CarrinhoService

@Component({
  selector: 'app-biscoitos',
  imports: [RodapeComponent, CategoryHeaderComponent],
  templateUrl: './biscoitos.component.html',
  styleUrl: './biscoitos.component.css'
})
export class BiscoitosComponent {
  // Injeção de todos os serviços necessários
  private authService = inject(AuthService);
  private carrinhoService = inject(CarrinhoService);
  private router = inject(Router);

  // Alteramos a função para receber o nome e preço do produto vindo do HTML
  comprarProduto(nome: string, preco: number) {
    
    // 1. Validação de segurança: Verifica se o usuário está logado
    if (!this.authService.isAuthenticated) {
      alert('Acesso negado, faça o login primeiro para usar o carrinho! 🚐');
      return; // Para tudo aqui se não estiver logado
    }

    // 2. Se estiver logado, cria o objeto do produto
    const novoItem = {
      id: Date.now(), // Gera um ID único baseado no tempo atual
      nome: nome,
      preco: preco
    };

    // 3. Adiciona o produto no carrinho
    this.carrinhoService.adicionarAoCarrinho(novoItem);

    // 4. Redireciona o usuário para a página de sucesso da compra
    this.router.navigate(['/sucesso-compra']);
  }
}