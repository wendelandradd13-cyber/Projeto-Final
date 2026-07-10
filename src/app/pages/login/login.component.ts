import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() irParaCadastro = new EventEmitter<void>();
  @Output() fecharModal = new EventEmitter<void>();
}