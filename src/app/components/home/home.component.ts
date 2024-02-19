import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import colors from 'tailwindcss/colors';
import { ChartOptions } from '../../@types/chart-options';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgApexchartsModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "number of cases",
          data: [
            {
              x: "Brazil",
              y: 50,
              fillColor: colors.blue[500]
            },
            {
              x: "India",
              y: 79,
              fillColor: colors.red[500]
            },
            {
              x: "China",
              y: 83,
              fillColor: colors.amber[500]
            },
            {
              x: "USA",
              y: 22,
              fillColor: colors.yellow[500]
            },
            {
              x: "Russia",
              y: 123,
              fillColor: colors.green[500],
            },
          ]
        },
      ],
      chart: {
        height: 350,
        width: "100%",
        type: "bar",
        background: '#fff'
      },
      title: {
        text: "Number of COVID-19 cases in different countries",
        align: 'center'
      },
    };
  }

  resetScrollPosition(): void {
    window.scrollTo({
      top: 0
    });
  }

}
