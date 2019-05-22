import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  destruction: Subscription;

  constructor() { 
    this.destruction =
    this.regresaObservable()/* .pipe(retry(2)) */
    .subscribe(numero =>console.log('subs', numero), err =>console.error('error obs', err),()=>console.log('Termina el observable'));


  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('Se cambio de pagina ');
    this.destruction.unsubscribe();
  }

  regresaObservable(): Observable<any>{

    return new Observable((observer:Subscriber<any>) =>{
      let contador = 1;
      let intervalo = setInterval(()=>{
        contador += 1;

        const salida = {
          valor: contador
        }



        observer.next(salida);

        /* if (contador === 5) {
          clearInterval(intervalo);
          observer.complete();
        } */  
        /* else{
          if (contador === 3) {
            /* clearInterval(intervalo); 
             observer.error('auxilio');
          } */
        //}
      },1000)

    }).pipe(map(data => data.valor),
      filter((valor, index)=>{
        if ((valor % 2) === 1) {
          //impar

          return true;

        }else{
          //par

          return false
        }

      })
    
    
    )

   
  }

}
