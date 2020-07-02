import { Component } from '@angular/core';
import { ImcService } from '../calculo'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    peso : number;
    altura : number;
    resultado : string;

  constructor(private imc :ImcService) {}
   ngOnInit() {
  }
  
  calculaImc(){
    this.resultado = this.imc.calcular(this.peso, this.altura);
  }


}
