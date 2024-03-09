import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title?: ApexTitleSubtitle;
    responsive?: ApexResponsive[]
    plotOptions?: ApexPlotOptions,
    legend?: ApexLegend,
    dataLabels?: ApexDataLabels,
    colors?: string[]
    stroke?: ApexStroke
    xaxis?: ApexXAxis,
    yaxis?: any,
    tooltip?: ApexTooltip,
    fill?: ApexFill
};