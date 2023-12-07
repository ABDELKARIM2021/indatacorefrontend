import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'], 
   template: '<canvas id="barChart" width="400" height="400"></canvas>'

})
export class BarChartComponent implements OnInit {


  ngOnInit() {
    this.createBarChart();
  }

  
  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Bar Chart Example',
          data: [10, 20, 30],
          backgroundColor: ['red', 'green', 'blue'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}
