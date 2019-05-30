import { Router } from '@angular/router';
import { URL_SERVICIOS } from './../../config/config';

/* import { swal } from 'sweetalert'; */
import { Usuario } from './../../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';
declare var swal:any; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:Usuario;
  token:string;

  constructor(public http:HttpClient, public router:Router, public _subirArchivo:SubirArchivoService) {
   
    this.cargarStorage();
   }

   guardarDatosStorage(id:string, token:string, usuario: Usuario){
    localStorage.setItem('id',id);
    localStorage.setItem('token',token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
   }

   crearUsuario(usuario: Usuario){

    let url = `${URL_SERVICIOS}/usuario`;

    return this.http.post(url, usuario)
                .pipe(
                map((resp: any) =>{
                  swal('Usuario Creado Correctamente', usuario.email, 'success')
                  return resp.Usuario;
                }));

   }

   loginGoogle(token: string){
    let url = `${URL_SERVICIOS}/login/google`;

    return this.http.post(url, {token})
                    .pipe(
                      map((resp:any) =>{
                        this.guardarDatosStorage(resp.id,resp.token,resp.usuario)
                        return true;
                      }));

    
   }

   

   login(usuario:Usuario, recuerdame: boolean = false){

    if(recuerdame){

      localStorage.setItem('email', usuario.email);

    } else{
      
      localStorage.removeItem('email');
    }

    
    let url = `${URL_SERVICIOS}/login`;

    return this.http.post(url, usuario)
                    .pipe(
                      map((resp:any) =>{
                        this.guardarDatosStorage(resp.id,resp.token,resp.usuario)
                        return true;
                      }));

   }

   logout(){
     this.usuario = null;
     this.token = '';

     localStorage.removeItem('token');
     localStorage.removeItem('usuario');

     this.router.navigate(['/login']);
   }

   actualizarUsuario(usuario:Usuario){
     
     let url  = `${URL_SERVICIOS}/usuario/${usuario._id}`;
     url += '?token=' + this.token;
   

     return this.http.put(url, usuario).pipe(
                      map((resp:any) =>{
                        let usuarioStorage:Usuario = resp.usuario;
                       /*  this.usuario = resp.usuario; */
                       this.guardarDatosStorage(usuarioStorage._id, this.token, usuarioStorage)
                        swal('Usuario Actualizado', usuario.nombre, 'success');

                        return true;
          
                      }));


   }


   estaLogueado(){
     return (this.token.length > 5) ? true:false
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
       this.token = localStorage.getItem('token');
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
     }else{
       this.token = '';
       this.usuario = null;
     }
   }

   cambiarImagen( archivo: File, id: string ) {

    this._subirArchivo.subirArchivo( archivo, 'usuarios', id )
          .then( (resp: any) => {
            
            this.usuario.img = resp.usuario.img;
            swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarDatosStorage( id, this.token, this.usuario ); 

          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }
}
