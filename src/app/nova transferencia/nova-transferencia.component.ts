import { Transferencia } from './../models/transferencia.model';
import { Component, Output,EventEmitter } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";

@Component({//Está é minha classe, e é aqui que vou colocar os métodos de click, submit, etc...
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {//Aqui que vai ter nossas lógicas e nossos métodos, como está CLASS é export, então temos váriaveis
  //que podem ser acessadas fora desta classe em outro arquivo

  //mandar estes dados para quem o invocou, tirar esses dados para fora enviar para quem chamou
  @Output()//aqui dentro do "aoTransferir" tem os dados "valor e destino" poderá ser usado no componente que usar o @Input -> pra receber estes dados
  aoTransferir: EventEmitter<any> = new EventEmitter<any>(); //esse evento "aoTransferir" vai poder receber qualquer tipo de dados, objeto, number etc..

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir() {
    console.log('Solicitado nova transferencia');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };//estamos tipando o objeto para que siga um modelo
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();//se retornar resultado é pq o método POST deu certo, e ai fará a limpeza de campos
    },
    (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
