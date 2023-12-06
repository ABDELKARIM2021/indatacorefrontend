// machine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(`${this.apiUrl}/machines`);
  }

  deleteMachine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/machines/${id}`);
  }
  
  addRandomMachine(): Observable<void> {
    // Utilisez void car le backend ne renvoie pas la machine générée
    return this.http.post<void>(`${this.apiUrl}/machines/machinealeatoire`, {});
  }

  updateMachine(id: number, updatedMachine: Machine): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/machines/${id}`, updatedMachine);
  }
}

export interface Machine {
  id: number;
  nom: string;
  type: string;
  description: string;
}
