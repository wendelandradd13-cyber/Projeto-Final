import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  username: string;
  token: string;
  role: 'admin' | 'user'; 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('app_user');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  /**
   * Método de Login com validação de Admin e Senha
   * Retorna true se os dados estiverem certos, ou false se estiverem errados.
   */
  login(username: string, password: string): boolean {
    
    // Condição: Verifica se é o admin com a senha correta
    if (username === 'admin' && password === '123456') {
      
      const mockUser: User = {
        username: username,
        token: 'token-jwt-ficticio-12345',
        role: 'admin' // Define a role automaticamente como admin
      };

      // Salva a sessão no navegador
      localStorage.setItem('app_user', JSON.stringify(mockUser));
      this.currentUserSubject.next(mockUser);
      
      return true; // Login bem-sucedido!
    }

    // Se não cair na condição acima, o login falhou
    this.logout(); // Garante que qualquer sessão anterior seja limpa
    return false; 
  }

  logout(): void {
    localStorage.removeItem('app_user');
    this.currentUserSubject.next(null);
  }

  public get isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  public get isAdmin(): boolean {
    const user = this.currentUserSubject.value;
    return user !== null && user.role === 'admin';
  }
}