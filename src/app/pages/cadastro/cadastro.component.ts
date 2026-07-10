import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  @Output() irParaLogin = new EventEmitter<void>();
  @Output() fecharModal = new EventEmitter<void>();
}