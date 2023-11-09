import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apoliceseguro',
  templateUrl: './apoliceseguro.component.html',
  styleUrls: ['./apoliceseguro.component.css']
})
export class ApoliceseguroComponent implements OnInit {
  nome: string;
  sexo: string = null;
  idade: number
  valorAuto: number
  resultado: number
  verificacao: string

  calcularApolice(){
    console.log(this.sexo); 
    if (this.sexo == null) this.verificacao = "O campo Sexo é obrigatório"
    else if (this.idade == null) this.verificacao = "O campo idade é obrigatório"
    else if (this.valorAuto == null) this.verificacao = "O campo Valor Automóvel é obrigatório"
    else {
      if (this.sexo == "M"){
        if(this.idade <= 25)
         this.resultado = this.valorAuto * 0.15;
        else 
        this.resultado = this.valorAuto * 0.10;
    } else{
      this.resultado = this.valorAuto * 0.08;
    }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
