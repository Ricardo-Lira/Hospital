import { Usuario } from './../models/usuario.model';
import { UsuarioService } from '../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare function initPlugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  recuerdame: boolean = false;
  email:string;
  auth2:any;


  constructor(public _router:Router, public _usuarioService:UsuarioService) { } 

  ngOnInit() {
    initPlugins();
    this.googleInit();
    
    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit(){
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '1047147922645-tpa3irslijjjge8blc4sub46tn343g0t.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope: 'profile email'
      });

      this.attachSigin(document.getElementById('btn-google'))


    });
  }

  attachSigin(element){
    this.auth2.attachClickHandler(element, {}, (googleUser)=>{
        /* let profile = googleUser.getBasicProfile();  */
        let token = googleUser.getAuthResponse().id_token;
      /*   console.log('Token:',token); */
        this._usuarioService.loginGoogle(token).subscribe(()=>{
          window.location.href = '#/dashboard'
          /* this._router.navigate(['/dashboard']) 
           */
        })
       
    
    })
  }


  ingresar(forma: NgForm){

    if ( forma.invalid) return;
    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
                        .subscribe(resivido=>this._router.navigate(['/dashboard']));
   /* this._router.navigate(['/dashboard']);  */
  }

}
