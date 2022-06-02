import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  TAREFA_KEY = 'tarefa_key';
  listaTarefas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const tarefas = localStorage.getItem(this.TAREFA_KEY);
    if (tarefas) {
      this.listaTarefas = JSON.parse(tarefas);
    }
  }

  public adicionar(nomeTarefa: string): void {
    if (nomeTarefa.trim().length == 0) {
      return;
    }
    const tarefaEncontrada = this.listaTarefas.find(
      item => item.nome.toLowerCase() === nomeTarefa.toLowerCase()
    );

    if (!tarefaEncontrada) {
      this.listaTarefas.push({
        id: this.listaTarefas.length,
        nome: nomeTarefa,
        concluida: false
      });
      this.salvarLista();
    }
  }

  public deletar(id: number): void {
    this.listaTarefas = this.listaTarefas.filter(
      item => item.id !== id
    );
    this.salvarLista();
  }

  public completar(id: number): void {
    const tarefaEncontrada = this.listaTarefas.find(
      item => item.id === id
    );
    let check = (tarefaEncontrada.concluida) ? false : true;
    tarefaEncontrada.concluida = check;
    this.salvarLista();
  }

  private salvarLista() : void {
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefas));
  }

}
