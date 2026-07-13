import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService, Produto } from '../../componentes/services/carrinho.service'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-sucesso-compra',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sucesso-compra.component.html',
  styleUrl: './sucesso-compra.component.css'
})
export class SucessoCompraComponent implements OnInit {
  private carrinhoService = inject(CarrinhoService);
  
  produtosComprados: Produto[] = [];
  totalDaCompra = 0;
  compraFinalizada = false; // Controla se o usuário já clicou em pagar/finalizar

  ngOnInit() {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    this.produtosComprados = this.carrinhoService.getItens();
    this.atualizarTotal();
  }

  atualizarTotal() {
    this.totalDaCompra = this.produtosComprados.reduce((acc, item) => acc + item.preco, 0);
  }

  // 1. Função para remover uma compra específica da lista
  removerItem(id: number) {
    // Se o seu serviço tiver um método de remover, chame-o aqui. 
    // Caso contrário, fazemos a remoção direto no array local:
    this.produtosComprados = this.produtosComprados.filter(item => item.id !== id);
    
    // Opcional: Atualiza o estado lá no serviço para manter sincronizado
    // this.carrinhoService.atualizarItens(this.produtosComprados); 

    this.atualizarTotal();
  }

  // 2. Função para poder comprar / finalizar o pedido de verdade
  confirmarCompra() {
    this.compraFinalizada = true;
    alert('Pedido enviado para a Máquina do Mistério! 🚐💨');
  }

  // Limpa o carrinho ao sair da tela se a compra foi concluída
  aoVoltar() {
    if (this.compraFinalizada) {
      this.carrinhoService.limparCarrinho();
    }
  }
}