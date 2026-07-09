import { Component, inject } from '@angular/core'; // Adicionamos o 'inject' aqui
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // AGORA SIM! Pegando o Router do '@angular/router'
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CategoryHeaderComponent } from '../../componentes/category-header/category-header.component';

@Component({
  selector: 'app-area-tutor',
  standalone: true,
  imports: [CommonModule, RouterLink, RodapeComponent, CategoryHeaderComponent], // Tirei o Router daqui (no imports de Componentes Standalone a gente só coloca RouterLink ou RouterModule, o Router em si não vai no array de imports do HTML)
  templateUrl: './area-tutor.component.html',
  styleUrls: ['./area-tutor.component.css']
})
  
  // 🔽 ADICIONE ESSA LINHA AQUI PARA CRIAR A VARIÁVEL DO ROTEADOR 🔽
  
export class AreaTutorComponent {
  petSessao = {
    nomePet: 'Scooby-Doo',
    servico: 'Banho & Tosa Premium',
    status: 'concluido',
    
    // 🔽 BASTA COLOCAR O NOME DO ARQUIVO DIRETO (OU COM UMA BARRA NA FRENTE) 🔽
    fotoAntes: 'cachorro-antes.png',   // ou '/scooby-antes.png'
    fotoDepois: 'cachorro-depois.png', // ou '/scooby-depois.png'
    
    observacao: 'O Scooby se comportou muito bem! Ficou com um pouco de medo do secador, mas resolvemos isso oferecendo dois Biscoitos Scooby. 🐕✨'
  };

  private router = inject(Router);

  baixarFotos() {
    alert('Fazendo download do registro de investigação! 📸');
  }

  logout() {
    // 1. Se você estivesse usando localStorage para salvar o login, limparia aqui:
    // localStorage.removeItem('usuario_logado');
    
    // 2. Exibe um feedback legal para o usuário
    alert('Sessão encerrada com sucesso. Até a próxima investigação! 🚐💨');

    // 3. Redireciona para a página Home (ou para a página de login, ex: '/login')
    this.router.navigate(['']); 
  }
}