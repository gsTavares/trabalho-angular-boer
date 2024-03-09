import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChartOptions } from '../../@types/chart-options';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  charts: ChartOptions[] = [];

  constructor(private dashboardService: DashboardService) {
    this.charts = [
      this.dashboardService.lineChart,
      this.dashboardService.areaChart
    ];
  }

}
