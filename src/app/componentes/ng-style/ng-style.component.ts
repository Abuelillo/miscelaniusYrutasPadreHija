import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
    <p [style.fontSize.px]="tamano">
      Hola pelotudo, esto es una etiqueta
    </p>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
