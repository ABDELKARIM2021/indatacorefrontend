import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../employe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})  
export class SignupComponent {
  employeeName: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string | undefined;

  constructor(private router: Router,private httpClient: HttpClient) {}

  // nouvelEmploye: Employe = new Employe(this.employeeName, this.email,this.password);

  
    signup() {

      const nouvelEmploye: Employe = {
        nom: this.employeeName,
        email: this.email,
        password: this.password
      };
      this.httpClient.post<Employe>('http://localhost:8080/singup', nouvelEmploye)
        .subscribe(
          response => {
          alert('Inscription avec succées')
console.log('Réponse du backend :', response);

              // L'inscription a réussi, rediriger vers la page de connexion
              this.router.navigate(['/login']);
        
            
          },
          error => {
            // Gérer les erreurs du backend ici
            console.error('Erreur lors de l\'inscription:', error);
          }
        );
    }
    // Ajoutez ici la logique pour appeler votre service backend pour l'inscription
    // par exemple, utilisez un service d'authentification pour envoyer les données au backend
    // Une fois l'inscription réussie, vous pouvez rediriger l'utilisateur vers la page de connexion
   
  }






  
  // Créez une instance d'Employe
  
  // Envoyez une requête POST vers le backend










