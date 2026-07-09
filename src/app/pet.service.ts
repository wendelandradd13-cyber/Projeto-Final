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
    fotoChegada: 'assets/imagens/chegada.jpg',
    fotoBanho: 'assets/imagens/banho.jpg',
    fotoDepois: 'assets/imagens/pronto.jpg'
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
        pet.statusTexto =
          '🐾 Pet acabou de chegar ao Pet Shop.';
        break;

      case 2:
        pet.statusTexto =
          '🛁 Pet está tomando banho.';
        break;

      case 3:
        pet.statusTexto =
          '✂️ Pet está realizando a tosa.';
        break;

      case 4:
        pet.statusTexto =
          '🎉 Atendimento finalizado.';
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

  atualizarFotoDepois(foto: string) {
    const pet = this.getPet();
    pet.fotoDepois = foto;
    this.petSubject.next({ ...pet });
  }
}