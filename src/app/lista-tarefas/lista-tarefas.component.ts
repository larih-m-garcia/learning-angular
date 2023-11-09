import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  listaTarefas : any = [
      {descricao: "comprar presentes",
      concluida: true},
      {descricao: "fazer lista de convidados",
      concluida: false},
      {descricao: "organizar brincadeiras",
      concluida: true},
      {descricao: "organizar comes e bebes",
      concluida: false},
      {descricao: "montar árvore de natal",
      concluida: false}
  ]

  mudarStatus(index){
    this.listaTarefas[index].concluida = !this.listaTarefas[index].concluida;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
