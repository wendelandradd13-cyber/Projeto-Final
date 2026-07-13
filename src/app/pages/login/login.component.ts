import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // 1. Adicionado o NgForm aqui 🧪
import { Router } from '@angular/router';
import { AuthService } from '../../componentes/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() irParaCadastro = new EventEmitter<void>();
  @Output() fecharModal = new EventEmitter<void>();

  private authService = inject(AuthService);
  private router = inject(Router);

  usuarioDigitado = '';
  senhaDigitada = '';

  // 2. Recebemos o formulário vindo lá do HTML
  executarLogin(form: NgForm) {
    
    // 3. SE O FORMULÁRIO FOR INVÁLIDO (Checkbox desmarcado, por exemplo), TRAVA AQUI!
    if (form.invalid) {
      alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade para entrar na van! 🚐🐾');
      return; // Interrompe a execução da função na hora
    }

    // 4. Se passou na validação, executa a sua lógica de login normalmente:
    const sucesso = this.authService.login(this.usuarioDigitado, this.senhaDigitada);

    if (sucesso) {
      alert('Login efetuado com sucesso!');
      this.fecharModal.emit(); 
      this.router.navigate(['/biscoitos']); 
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}