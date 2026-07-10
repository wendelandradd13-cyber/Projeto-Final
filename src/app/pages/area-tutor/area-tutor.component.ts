import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { PetService, Pet } from '../../componentes/services/pet.service';

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
export class AreaTutorComponent implements OnInit {
  private router = inject(Router);
  private petService = inject(PetService);

  petSessao!: Pet;

  ngOnInit(): void {
    this.petService.pet$.subscribe(pet => {
      this.petSessao = pet;
    });
  }

  // Retorna dinamicamente a foto com base no botão clicado na timeline
  get fotoAtual(): string {
    if (!this.petSessao) return '';

    switch (this.petSessao.etapa) {
      case 1:
        return this.petSessao.fotoChegada || 'etapa-chegada.png';
      case 2:
        return this.petSessao.fotoBanho || 'etapa-banho.png';
      case 3:
        // CORRIGIDO: Antes estava repetindo a foto do banho aqui
        return this.petSessao.fotoTosa || 'etapa-tosa.png';
      case 4:
        return this.petSessao.fotoDepois || 'etapa-pronto.png';
      default:
        return 'assets/etapa-chegada.jpg';
    }
  }

  // Retorna o texto explicativo da etapa atual
  get tituloEtapa(): string {
    if (!this.petSessao) return '';

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

  baixarFotos() {
    alert('📸 Download iniciado!');
  }
  
  // Atualiza a etapa quando o tutor clica nos botões da timeline
  mostrarEtapa(etapa: number) {
    if (this.petSessao) {
      this.petSessao.etapa = etapa;
    }
  }

  logout() {
    alert('Sessão encerrada.');
    this.router.navigate(['']);
  }
}