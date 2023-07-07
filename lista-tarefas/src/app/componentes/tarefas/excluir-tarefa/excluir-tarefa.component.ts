import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styleUrls: ['./excluir-tarefa.component.css'],
})
export class ExcluirTarefaComponent implements OnInit {
  //
  tarefa: Tarefa = {
    id: 0,
    conteudo: '',
    responsavel: '',
    etapa: '',
  };

  //No Angular, a injeção de dependências é feito através do construtor
  constructor(
    private service: TarefaService, //Injetando os serviços disponíveis
    private router: Router, //Injetado para redirecionamento de rotas
    private route: ActivatedRoute // Injetado para fornecer parâmetros, rotas e caminhos que virão dos elementos HTML
  ) {}

  ngOnInit(): void {
    //O 'snapshot' faz uma fotografia da rota no momento em que ela foi acessada
    //O 'paramMap' traz um mapa dos parametros obrigatórios e opcionais da 'tarefa'
    //A constante 'id' foi declarada para conseguir obter o 'id' da 'tarefa' a fim de conseguirmos excluí-la
    const id = this.route.snapshot.paramMap.get('id');

    //Como o 'id' foi declarado na interface como number, precisamos parsear para inteiro
    this.service.buscarPorId(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa;
    });
  }

  excluirTarefa() {
    if (this.tarefa.id) {
      this.service
        .excluir(this.tarefa.id)
        .subscribe(() => this.router.navigate(['/listarTarefa']));
    }
  }

  cancelar() {
    this.router.navigate(['/listarTarefa']);
  }
}
