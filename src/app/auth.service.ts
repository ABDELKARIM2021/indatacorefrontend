import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn = false;

  // Simuler une connexion réussie
  login() {
    this.isLoggedIn = true;
  }

  // Simuler une déconnexion
  logout() {
    this.isLoggedIn = false;
  }

  // Vérifier l'état de connexion
  isLoggedIn_m() {
    return this.isLoggedIn;
  }


}
