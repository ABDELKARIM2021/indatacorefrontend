import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string='';

  
  constructor(private authService: AuthService,private router: Router,private http:HttpClient) {}



  login() {
    
    const credentials = {
    email: this.email,
    password: this.password
  };
  this.http.post<any>('http://localhost:8080/singin', credentials)
  .subscribe(
    response => {
      if (response.id) {
        alert('Login avec succès');
        this.authService.login();
        this.router.navigate(['/']);
      } else {
        alert('Login ou mot de passe incorrect');
        this.router.navigate(['/login']);
      }
    },
    error => {
      console.error('Erreur lors de l\'authentification:', error);
      this.errorMessage = 'Une erreur s\'est produite lors de l\'authentification.';
    }
  );

}
}
