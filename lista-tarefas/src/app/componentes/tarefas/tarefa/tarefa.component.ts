import { Tarefa } from './../tarefa';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  //O componente 'tarefa' é filho, por isso é decorado com @Input()
  //A variável 'tarefa' precisa ser tipada com o modelo definido na interface 'tarefa.ts'
  //Agora, o contrato precisa ser seguido à risca, por isso o objeto precisa conter TODOS os atributos definidos na interface
  @Input()
  tarefa: Tarefa = {
    id: 0,
    conteudo: 'I love Angular',
    responsavel: 'Ricardo',
    etapa: 'etapa3',
  };

  constructor() {}

  ngOnInit(): void {}

  larguraTarefa(): string {
    if (this.tarefa.conteudo.length >= 256) {
      return 'tarefa-g';
    }
    return 'tarefa-p';
  }
}
