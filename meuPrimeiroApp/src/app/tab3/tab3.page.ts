import { Component, OnInit } from '@angular/core';
import { PesoIdealService } from '../calculo';

@Component({
  selector: 'app-peso-ideal-tab',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class PesoIdealTab implements OnInit {

  genero : string;
  altura : number;
  resultado : string;

  constructor(private pesoIdeal : PesoIdealService) { }

  ngOnInit() {
    this.genero = "homem"
  }

  calcularPesoIdeal(){
    this.resultado = this.pesoIdeal.calcular(this.genero, this.altura);
  }
}