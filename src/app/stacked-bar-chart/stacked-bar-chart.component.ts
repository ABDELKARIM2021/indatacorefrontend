// stacked-bar-chart.component.ts

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {
  stackedBarChart!: Chart; // Add definite assignment assertion

  ngOnInit() {
    this.createStackedBarChart();
  }

  createStackedBarChart() {
    const ctx = document.getElementById('stackedBarChart') as HTMLCanvasElement;
    this.stackedBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20, 30, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [10, 20, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      },
      options: {
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }
}
