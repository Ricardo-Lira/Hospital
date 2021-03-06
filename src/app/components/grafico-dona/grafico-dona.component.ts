import { Component, OnInit, Input } from '@angular/core';

import { ChartType } from 'chart.js';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

   // Doughnut
   @Input('chartLabels') doughnutChartLabels: Label[] = [];
   @Input('chartData') doughnutChartData: MultiDataSet = [];
   @Input('chartType') doughnutChartType: ChartType = 'doughnut';
   @Input('chartColor') public lineChartColors: Color[]= [];


  constructor() { }

  ngOnInit() {
  }

}
