import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { RodapeComponent } from '../../componentes/rodape/rodape.component';

@Component({
  selector: 'app-area-tutor',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RodapeComponent
  ],
  templateUrl: './area-tutor.component.html',
  styleUrls: ['./area-tutor.component.css']
})
export class AreaTutorComponent {
  private router = inject(Router);
  petSessao = {
    nomePet: 'Scooby-Doo',
    tutor: 'Wendel Andrade',
    servico: 'Banho & Tosa Premium',
    etapa: 2,
    statusTexto: '🛁 Seu pet está tomando banho.',
    fotoChegada: 'cachorro-chegada.jpg',
    fotoBanho: 'cachorro-banho.jpg',
    fotoDepois: 'cachorro-pronto.jpg',
    observacao:
      'Scooby está muito tranquilo e colaborando durante todo o atendimento.'
  };

  get fotoAtual(): string {
    switch (this.petSessao.etapa) {
      case 1:
        return this.petSessao.fotoChegada;
      case 2:
        return this.petSessao.fotoBanho;
      case 3:
        return this.petSessao.fotoBanho;
      case 4:
        return this.petSessao.fotoDepois;
      default:
        return this.petSessao.fotoChegada;
    }
  }

  get tituloEtapa(): string {
    switch (this.petSessao.etapa) {
      case 1:
        return '🐾 Seu pet acabou de chegar ao Pet Shop';
      case 2:
        return '🛁 Seu pet está tomando banho';
      case 3:
        return '✂️ Seu pet está na tosa';
      case 4:
        return '🎉 Seu pet está pronto para retirada';
      default:
        return '';
    }
  }

  atualizarStatus() {
    switch (this.petSessao.etapa) {
      case 1:
        this.petSessao.statusTexto =
          '🐾 Seu pet chegou ao Pet Shop.';
        break;
      case 2:
        this.petSessao.statusTexto =
          '🛁 Seu pet está tomando banho.';
        break;
      case 3:
        this.petSessao.statusTexto =
          '✂️ Seu pet está realizando a tosa.';
        break;
      case 4:
        this.petSessao.statusTexto =
          '✅ Atendimento finalizado.';
        break;
    }
  }

  proximaEtapa() {
    if (this.petSessao.etapa < 4) {
      this.petSessao.etapa++;
      this.atualizarStatus();
    }
  }

  voltarEtapa() {
    if (this.petSessao.etapa > 1) {
      this.petSessao.etapa--;
      this.atualizarStatus();
    }
  }

  baixarFotos() {
    alert('📸 Download iniciado!');
  }

  logout() {
    alert('Sessão encerrada.');
    this.router.navigate(['']);
  }
}