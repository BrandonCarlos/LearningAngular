//Este arquivo é onde temos mais comunicação com termos externos, dados de api, dados que preciso gerenciar na tela
import { Injectable } from '@angular/core';

@Injectable({//angular trabalha muito com injeção de dependência
  providedIn: 'root' //Aqui diz que este service faz parte de toda a aplicação, ou seja posso fazer injeção de dependência em todo o projeto
})
export class TransferenciaService {
  private listaTransferencia: any[];//Lá no app.component.ts tinhamos este array vázio, agora é aqui que fazemos isso

constructor() {
  this.listaTransferencia = [];
}

get transferencias() {
  return this.listaTransferencia;
}

adicionar(transferencia: any) {
  this.hidratar(transferencia);
  this.listaTransferencia.push(transferencia); //ou seja to mandando p/ o app.component.html o objeto com os atributos "valor e destino e data"
}

private hidratar(transferencia: any) {
  transferencia.data = new Date();//Date foi criado na hora
}

}
