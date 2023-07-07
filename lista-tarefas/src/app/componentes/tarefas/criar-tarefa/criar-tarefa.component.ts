import { Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from './../tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css'],
})
//
export class CriarTarefaComponent implements OnInit {
  //Objeto tarefa
  //O objeto 'tarefa' precisa ser tipado com a interface definida em Tarefa'
  //Lembrando que o objeto precisa conter TODOS os atributos definidos em sua interfa (tipo escolhido para este objeto)

  tarefa: Tarefa = {
    conteudo: '',
    responsavel: '',
    etapa: 'etapa1',
  };

  constructor(private service: TarefaService, private router: Router) {}

  ngOnInit(): void {}

  criarTarefa() {
    this.service.criar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefa']);
    });
  }

  cancelarTarefa() {
    this.router.navigate(['/listarTarefa']);
  }
}
