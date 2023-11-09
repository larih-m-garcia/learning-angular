import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  ra: string;
  nome: string;
  email: string;
  phone: string;
  verificacao: string;
  sucesso: boolean = false;

  verificarCampos(){
    if (this.ra == null) this.verificacao = "O campo RA é obrigatório"
    else if (this.nome == null) this.verificacao = "O campo Nome é obrigatório"
    else if (this.email == null) this.verificacao = "O campo Email é obrigatório"
    else if (this.phone == null) this.verificacao = "O campo Telefone é obrigatório"
    else {this.verificacao = "Usuário cadastrado com sucesso"
          this.sucesso = true}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
