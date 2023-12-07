import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  radarChart: Chart = new Chart('radarChart', {
    type: 'radar',
    data: {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [{
        label: 'My Radar Dataset',
        data: [10, 20, 15, 25, 30],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }]
    },
    options: {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 50
        }
      }
    }
  });

  ngOnInit() {
    // Vous pouvez éventuellement ajouter des configurations supplémentaires ici
  }
}
