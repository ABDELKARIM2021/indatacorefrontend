import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Chart, ChartConfiguration, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(public authService: AuthService) {}

 
}