import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes:AjustesThema ={
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }


  constructor(@Inject(DOCUMENT) private _document) { this.cargarAjustesThema(); }

  guardarAjustesThema(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustesThema(){
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarThema(this.ajustes.tema);
    }else{
      console.log('usando valores por dafault');
    }
  }

  aplicarThema(tema:string){
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustesThema();
  }

}


interface AjustesThema{
  temaUrl:string,
  tema:string
}
