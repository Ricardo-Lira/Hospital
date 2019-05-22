import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres() .then(()=> console.log('Termino !!')).catch((err)=>console.error('err',err));


   }

  ngOnInit() {
  }

  contarTres():Promise<boolean> {


     return new Promise((resolve, reject)=>{
      let contador = 0;
      console.log( contador);

     let intervalo = setInterval (()=>{

        contador += 1;
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      },1000)
    });



   

  }

}
