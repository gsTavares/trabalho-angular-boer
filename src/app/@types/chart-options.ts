import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle } from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    responsive?: ApexResponsive[]
    plotOptions?: ApexPlotOptions,
    legend?: ApexLegend,
    dataLabels?: ApexDataLabels
};