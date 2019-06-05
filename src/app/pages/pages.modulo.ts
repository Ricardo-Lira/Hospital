import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';
import { CommonModule } from '@angular/common';
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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { PipesModule } from '../pipes/pipes.module';





@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent


    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        // PagesComponent,

    ],
    imports:[
        CommonModule,
        SharedModule,
        Pages_Routes,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})

export class PagesModule{}