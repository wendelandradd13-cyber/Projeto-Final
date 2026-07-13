import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  // Lista de itens no carrinho
  private itensCarrinho: Produto[] = [];
  
  // Emissor para avisar os componentes quando o carrinho mudar
  private carrinhoSubject = new BehaviorSubject<Produto[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  adicionarAoCarrinho(produto: Produto) {
    this.itensCarrinho.push(produto);
    this.carrinhoSubject.next([...this.itensCarrinho]); // Atualiza todo mundo
  }

  getItens() {
    return this.itensCarrinho;
  }

  limparCarrinho() {
    this.itensCarrinho = [];
    this.carrinhoSubject.next([]);
  }
}