import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  

  constructor(private el:ElementRef) {
    //console.log("directiva llamada") 
    //el.nativeElement.style.backgroundColor = "red";
  }
  
  ramdom:number = this.generateRandomInteger(100,1000);
  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){    
    //this.el.nativeElement.style.backgroundColor = `#${this.ramdom}`;
    this.resaltar(this.nuevoColor || `#${this.ramdom}`);
    this.ramdom = this.generateRandomInteger(100,1000);
    
  }
  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

  private generateRandomInteger(min:number, max:number) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }
}
