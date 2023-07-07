import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css'],
})
export class EditarTarefaComponent implements OnInit {
  //
  tarefa: Tarefa = {
    id: 0,
    conteudo: '',
    responsavel: '',
    etapa: '',
  };

  constructor(
    private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((tarefa) => (this.tarefa = tarefa));
  }

  editarTarefa() {
    this.service
      .editar(this.tarefa)
      .subscribe(() => this.router.navigate(['/listarTarefa']));
  }

  cancelar() {
    this.router.navigate(['/listarTarefa']);
  }
}
