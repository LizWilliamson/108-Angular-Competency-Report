import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent{

  fahrenheit = 0;
  celsius = 0;

  constructor() { }

  convertFtoC(){
    var res = (this.fahrenheit - 32) * (5/9);
    this.celsius = res;
  }

  convertCtoF(){
    var res = this.celsius * (9/5) + 32;
    this.fahrenheit = res;

  }

 

  

}
