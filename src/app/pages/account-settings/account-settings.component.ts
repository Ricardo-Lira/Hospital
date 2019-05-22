import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustesThema:SettingsService) { }

  ngOnInit() {
    this.colocarIndicador();
  }

  cambiarColor(tema:string, link:any){
    this.aplicarIndicador(link);
    this._ajustesThema.aplicarThema(tema);
   
  }
  aplicarIndicador(link:any){
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores ){
      ref.classList.remove('working');

    }
    link.classList.add('working');
  }

  colocarIndicador(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this._ajustesThema.ajustes.tema;
    for(let ref of selectores ){
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }

    }
  }

}
