import { Transferencia } from './../models/transferencia.model';
import { Component, Output,EventEmitter } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";

@Component({//Está é minha classe, e é aqui que vou colocar os métodos de click, submit, etc...
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  //método aqui no nova-transferencia para fazer o POST
  transferir() {
    console.log('Solicitado nova transferencia');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };//estamos tipando o objeto para que siga o modelo transferencia
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
