import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcularmedia',
  templateUrl: './calcularmedia.component.html',
  styleUrls: ['./calcularmedia.component.css']
})
export class CalcularmediaComponent implements OnInit {
  ac1: number;
  ac2: number;
  ag: number;
  af: number;
  media: number;
  aprovado: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  calcularMedia(){
    this.media = (this.ac1 * 0.15) + (this.ac2 *0.30) + (this.ag * 0.10) + (this.af * 0.45)
  }

  getSituacao(){
    if (this.media == null)
      return ""
    else if(this.media >= 5){
      this.aprovado = true;
      console.log(this.aprovado)
      return "Aprovado"
  }
    else{
      this.aprovado = false
      return "Reprovado"
    }
  }

}
