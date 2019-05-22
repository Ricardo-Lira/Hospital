import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes: Routes = [
    { path: '', component: PagesComponent, children:[
            { path: 'dashboard', component: DashboardComponent, data: {titulo:'Dashboard', descripcion: 'Uso para interaccion de la pagina y sus componentes del usuario.' } },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'Progresos', descripcion: 'Barras de progreso e interactividad' } },
            { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Porcentajes', descripcion: 'Muestreo de graficas' } },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas', descripcion: 'Funcionamiento'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'ReactiveEx', descripcion: 'Libreria' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Themes',descripcion: 'Ajustes de los temas de la plantilla'} },
            { path: '', pathMatch:'full', redirectTo: '/dashboard' },
        ] },
    ];

export const Pages_Routes = RouterModule.forChild(pagesRoutes);