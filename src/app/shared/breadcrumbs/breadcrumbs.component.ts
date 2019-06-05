import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;
  descripcion:string;

  constructor(private _router:Router, private _title:Title, private _meta:Meta, private _desc:Title) {

    this.getDataRoute()
    .subscribe(data =>{
     /*  console.log(data); */
      this.title = data.titulo;
      this.descripcion = data.descripcion; 
      this._title.setTitle(this.title); 
      

      const metaTag: MetaDefinition ={
        name: 'description',
        content: this.descripcion
      };

      this._meta.updateTag(metaTag);
    })

   }

  ngOnInit() {
  }


  getDataRoute(){

  return this._router.events.pipe(filter(evento => evento instanceof ActivationEnd),
                             filter((evento:ActivationEnd) => evento.snapshot.firstChild === null),
                             map((evento: ActivationEnd)=>evento.snapshot.data)
    )

  }
}
 