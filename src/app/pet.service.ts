import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Pet {
  nomePet: string;
  tutor: string;
  servico: string;
  etapa: number;
  statusTexto: string;
  observacao: string;
  fotoChegada: string;
  fotoBanho: string;
  fotoTosa: string; // <-- ADICIONADO: Corrige o erro do TypeScript
  fotoDepois: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petSubject = new BehaviorSubject<Pet>({
    nomePet: 'Scooby-Doo',
    tutor: 'Wendel',
    servico: 'Banho & Tosa Premium',
    etapa: 1,
    statusTexto: '🐾 Pet chegou ao Pet Shop.',
    observacao: 'Aguardando início do atendimento.',
    fotoChegada: 'etapa-chegada.png',
    fotoBanho: 'etapa-banho.png',
    fotoTosa: 'etapa-tosa.png', // <-- ADICIONADO: Valor inicial do mock
    fotoDepois: 'etapa-pronto.png'
  });

  pet$ = this.petSubject.asObservable();

  getPet() {
    return this.petSubject.value;
  }

  atualizarEtapa(etapa: number) {
    const pet = this.getPet();
    pet.etapa = etapa;

    switch (etapa) {
      case 1:
        pet.statusTexto = '🐾 Pet acabou de chegar ao Pet Shop.';
        pet.observacao = 'O pet foi recebido e será preparado para o atendimento.';
        break;

      case 2:
        pet.statusTexto = '🛁 Pet está tomando banho.';
        pet.observacao = 'O banho está sendo realizado com produtos especiais.';
        break;

      case 3:
        pet.statusTexto = '✂️ Pet está realizando a tosa.';
        pet.observacao = 'O profissional está finalizando a tosa com cuidado.';
        break;

      case 4:
        pet.statusTexto = '🎉 Atendimento finalizado.';
        pet.observacao = 'Seu pet está limpinho, cheiroso e pronto para ser retirado.';
        break;
    }

    this.petSubject.next({ ...pet });
  }

  atualizarObservacao(texto: string) {
    const pet = this.getPet();
    pet.observacao = texto;
    this.petSubject.next({ ...pet });
  }

  atualizarFotoChegada(foto: string) {
    const pet = this.getPet();
    pet.fotoChegada = foto;
    this.petSubject.next({ ...pet });
  }

  atualizarFotoBanho(foto: string) {
    const pet = this.getPet();
    pet.fotoBanho = foto;
    this.petSubject.next({ ...pet });
  }

  // <-- ADICIONADO: Novo método para atualizar a foto da tosa dinamicamente se precisar
  atualizarFotoTosa(foto: string) {
    const pet = this.getPet();
    pet.fotoTosa = foto;
    this.petSubject.next({ ...pet });
  }

  atualizarFotoDepois(foto: string) {
    const pet = this.getPet();
    pet.fotoDepois = foto;
    this.petSubject.next({ ...pet });
  }
}