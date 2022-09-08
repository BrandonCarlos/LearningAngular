import { Component, Output,EventEmitter } from "@angular/core";

@Component({//Está é minha classe, e é aqui que vou colocar os métodos de click, submit, etc...
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {//Aqui que vai ter nossas lógicas e nossos métodos, como está CLASS é export, então temos váriaveis
  //que podem ser acessadas fora desta classe em outro arquivo

  //mandar estes dados para quem o invocou, tirar esses dados para fora enviar para quem chamou
  @Output()
  aoTransferir: EventEmitter<any> = new EventEmitter<any>(); //esse evento "aoTransferir" vai poder receber qualquer tipo de dados, objeto, number etc..

  valor: number;
  destino: number;

  transferir() {
    console.log('Solciitado nova transferencia');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);//após emitir os dados, abaixo vamos limpar os campos
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
