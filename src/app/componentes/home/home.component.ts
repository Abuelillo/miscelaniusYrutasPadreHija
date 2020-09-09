import { Component, OnInit,
  OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <div>
        <h3>Directivas</h3>
        <hr/>
        <p [appResaltado]="''">orange Hola <small>angular</small></p>
    </div>
    <div>
        <h3>app-ng-style</h3>
        <app-ng-style></app-ng-style>
    </div>
    <div>
        <h3>app-css</h3>
        <app-css></app-css>
    </div>
    <div>
        <h3>app-clases</h3>
        <app-clases></app-clases>
    </div>
    <div>
        <h3>app-ng-switch</h3>
        <app-ng-switch></app-ng-switch>
    </div>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  };

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
