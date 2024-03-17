import { Injectable } from '@angular/core';
import { ChartOptions } from '../@types/chart-options';
import colors from 'tailwindcss/colors'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  barChartOptions: BehaviorSubject<ChartOptions> = new BehaviorSubject<ChartOptions>({
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    series: [{
      name: 'Casos cadastrados',
      data: [{
        x: 'Número de casos cadastrados',
        y: 95,
        fillColor: colors.blue[500]
      }, {
        x: 'Positivos',
        y: 36,
        fillColor: colors.red[500],
      }, {
        x: 'Negativos',
        y: 59,
        fillColor: colors.green[500]
      }]
    }],
  });


  areaChart: ChartOptions = {
    chart: {
      height: 332,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Número de casos cadastrados",
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,

      }
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    }
  }

  constructor() { }

}
