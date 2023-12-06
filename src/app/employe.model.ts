 
// employe.model.ts

export class Employe {
    nom: string;
    email: string;
    password: string;
  
    constructor(nom: string, email: string, password: string) {
      this.nom = nom;
      this.email = email;
      this.password = password;
    }
  }
  