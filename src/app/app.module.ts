// import { SettingsService } from './services/settings/settings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRouting } from './app.routes';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.modulo';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { ServiceModule } from './services/service.module';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  
 
 
   
    // IncrementadorComponent,
  
  ],
  imports: [
    BrowserModule,
    appRouting,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
