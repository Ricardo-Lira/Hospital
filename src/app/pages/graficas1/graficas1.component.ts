import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Cardiologia', 'Oftalmologia', 'Neurologia'],
      'data':  [24, 30, 46],
      'color':[{
              backgroundColor:["#75AAFF", "#6B7AE8", '#FF75E7'] 
      }],
      'type': 'doughnut',
      'leyenda': '¿ Cuantas personas estan en especialidades ?'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'color':[{
        backgroundColor:["#75AAFF", "#6B7AE8"] 
      }],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Cada Mes', 'Cada Año'],
      'data':  [95, 5],
      'color':[{
        backgroundColor:["#75AAFF", "#6B7AE8"] 
      }],
      'type': 'doughnut',
      'leyenda': '¿Cada cuanto viene a consulta?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'color':[{
        backgroundColor:["#75AAFF", "#6B7AE8"] 
      }],
      'type': 'doughnut',
      'leyenda': '¿Cuenta con Seguro en caso de Emergencias?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
