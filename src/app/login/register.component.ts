import { Router } from '@angular/router';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/* import swal from 'sweetalert'; */
import { UsuarioService } from '../services/service.index';
declare var swal:any; 


declare function initPlugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public _usuarioService:UsuarioService, public router:Router) {}

    veryPassword(campo1:string, campo2:string){
      return (group: FormGroup)=>{

        let password = group.controls[campo1].value;
        let passwordVery = group.controls[campo2].value;

        if( password === passwordVery) return null;


        return {veryPassword: true}
      }

    }
   

  ngOnInit() {

    initPlugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl( false)

    }, {validators: this.veryPassword('password', 'password2')});

    this.forma.setValue({
      nombre: 'Jatziry',
      email: 'jatziry@correo.com',
      password: '123456',
      password2: '123456',
      condiciones: true


    })
  }

  registrarUsuario(){

    if (this.forma.invalid) return;

    if( !this.forma.value.condiciones) {
      swal({
        title: "Importante",
        text: "Debe de aceptar las Terminos y Condiciones",
        icon: "warning",
      });
      /* swal('Importante', 'Debe de aceptar las Terminos y Condiciones', 'warning') */
      return;
    }
    

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password,
    );

    this._usuarioService.crearUsuario(usuario).subscribe(resp=>this.router.navigate(['/login']));
  }

}
