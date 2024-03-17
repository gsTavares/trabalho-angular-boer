import { AfterViewChecked, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import colors from 'tailwindcss/colors';
import { ChartOptions } from '../../@types/chart-options';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  @ViewChild('barChartElement') barChartElement?: ChartComponent

  barChart: any;
  barChartSeries: any

  countries: string[] = [
    'Brasil',
    'China',
    'Estados Unidos',
    'Japão',
    'Rússia',
    'India',
    'Canada'
  ]

  newRegisterForm?: FormGroup
  formBuilder: FormBuilder = new FormBuilder();
  submitted: boolean = false;

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit(): void {
    this.buildNewRegisterForm();
    this.dashboardService.barChartOptions.subscribe({
      next: (value) => {
        this.barChart = value.chart;
        this.barChartSeries = value.series
        if (this.barChartElement) {
          this.barChartElement.updateSeries(this.barChartSeries, true);
        }
      }
    });
  }

  buildNewRegisterForm() {
    this.newRegisterForm = this.formBuilder.group({
      caseType: [null, Validators.required],
      country: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]]
    });
  }

  updateSeries(form: FormGroupDirective) {
    this.submitted = true;
    if (this.newRegisterForm!.valid) {
      const casosCadastrados = this.barChartSeries[0].data[0];
      

      casosCadastrados.y += this.newRegisterForm?.get('quantity')?.value;

      if(this.newRegisterForm!.get('caseType')?.value === 'POSITIVO') {
        const casosPositivos = this.barChartSeries[0].data[1];
        casosPositivos.y += this.newRegisterForm?.get('quantity')?.value;
      } else {
        const casosNegativos = this.barChartSeries[0].data[2];
        casosNegativos.y += this.newRegisterForm?.get('quantity')?.value;
      }
      this.dashboardService.barChartOptions.next({ ...this.dashboardService.barChartOptions.value, series: this.barChartSeries });
      form.resetForm();
      this.submitted = false;
    }

  }

}
