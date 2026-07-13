import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';
import { AuthService } from '../../componentes/services/auth.service';
import { CarrinhoService } from '../../componentes/services/carrinho.service';

@Component({
  selector: 'app-maquina-misterio',
  imports: [RouterLink, RodapeComponent, CategoryHeaderComponent],
  templateUrl: './maquina-misterio.component.html',
  styleUrl: './maquina-misterio.component.css'
})
export class MaquinaMisterioComponent {
  // Injeção moderna de todos os serviços necessários para a Máquina do Mistério 🚐
  private authService = inject(AuthService);
  private carrinhoService = inject(CarrinhoService);
  private router = inject(Router);

  comprarProduto(nome: string, preco: number) {
    // 1. Validação de segurança: o usuário está logado?
    if (!this.authService.isAuthenticated) {
      alert('Acesso negado, faça o login primeiro para usar o carrinho! 🚐');
      return; // Para a execução se não estiver autenticado
    }

    // 2. Se estiver logado, cria o objeto com as informações vindas do HTML
    const novoItem = {
      id: Date.now(), // ID único baseado no timestamp
      nome: nome,
      preco: preco
    };

    // 3. Adiciona o produto à lista global do carrinho
    this.carrinhoService.adicionarAoCarrinho(novoItem);

    // 4. Redireciona o detetive direto para a tela de sucesso da compra
    this.router.navigate(['/sucesso-compra']);
  }
}
