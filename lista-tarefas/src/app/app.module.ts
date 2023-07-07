import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { ListarTarefaComponent } from './componentes/tarefas/listar-tarefa/listar-tarefa.component';
import { TarefaComponent } from './componentes/tarefas/tarefa/tarefa.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirTarefaComponent } from './componentes/tarefas/excluir-tarefa/excluir-tarefa.component';
import { EditarTarefaComponent } from './componentes/tarefas/editar-tarefa/editar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarTarefaComponent,
    ListarTarefaComponent,
    TarefaComponent,
    ExcluirTarefaComponent,
    EditarTarefaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
