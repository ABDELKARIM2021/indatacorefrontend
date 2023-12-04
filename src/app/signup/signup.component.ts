import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  employeeName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  signup() {
    // Ajoutez ici la logique pour appeler votre service backend pour l'inscription
    // par exemple, utilisez un service d'authentification pour envoyer les données au backend
    // Une fois l'inscription réussie, vous pouvez rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['/login']);
  }
}
