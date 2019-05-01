import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.modulo';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { PagesComponent } from './pages.component';
import { Pages_Routes } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';




@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent


    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        // PagesComponent,

    ],
    imports:[
        SharedModule,
        Pages_Routes,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule{}