import { TarefaService } from './../tarefa.service';
import { Tarefa } from './../tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})

//Classe ListarTarefaComponent
export class ListarTarefaComponent implements OnInit {
  //O atributo 'listaTarefas' é um componente pai, por isso ele fornece as informações para o componente filho 'tarefa'
  //O 'listaTarefas' tambem precisa seguir o mesmo tipo definido na interface 'Tarefa'
  //A nossa 'listaTarefas' carregará os objetos que irão popular nosso banco de dados
  //Esta 'listaTarefas' virá do nosso backend
  listaTarefas: Tarefa[] = [];

  constructor(private service: TarefaService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas;
    });
  }
}
