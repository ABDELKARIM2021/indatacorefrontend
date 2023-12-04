import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private authService: AuthService,private router: Router) {}

  
  email: string = '';
  password: string = '';


  login() {
    // Ajoutez ici la logique pour appeler votre service backend pour la connexion
    // par exemple, utilisez un service d'authentification pour envoyer les données au backend
    // Une fois la connexion réussie, vous pouvez rediriger l'utilisateur vers une page appropriée
    // Par exemple, nous redirigeons l'utilisateur vers la page d'accueil '/'.
    this.authService.login();
    this.router.navigate(['/']);
  }

}
