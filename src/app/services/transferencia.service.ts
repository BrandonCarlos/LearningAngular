import { Transferencia } from './../models/transferencia.model';
//Este arquivo é onde temos mais comunicação com termos externos, dados de api, dados que preciso gerenciar na tela
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({//angular trabalha muito com injeção de dependência
  providedIn: 'root' //Aqui diz que este service faz parte de toda a aplicação, ou seja posso fazer injeção de dependência em todo o projeto
})
export class TransferenciaService {
  private listaTransferencia: any[];//Lá no app.component.ts tinhamos este array vázio, agora é aqui que fazemos isso
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {//HttpClient prove métodos para fazer requisições para uma API REST, GET, POST, PUT, DELETE
  this.listaTransferencia = [];
}

get transferencias() {
  return this.listaTransferencia;
}

//método para listar todas as transferências
todas() : Observable<Transferencia[]> {//Observable é assyncrono então em algum momento vou receber resposta do método GET, praticamente o mesmo que as Promises do javascript
  return this.httpClient.get<Transferencia[]>(this.url);//o que vai voltar desse GET vai ser uma "lista de transferencias(interface)"
}

//Este será o método POST
adicionar(transferencia: Transferencia): Observable<Transferencia> {//fazer o POST somente com os dados que forem enviados do tipo do modelo -> Transferencia
  this.hidratar(transferencia);//aqui já adicionou a data, formato de data mesmo
  return this.httpClient.post<Transferencia>(this.url, transferencia)
}

private hidratar(transferencia: any) {//não tipei por que data não é do tipo String e sim tipo Data mesmo e ia dar conflito
  transferencia.data = new Date();//Date foi criado na hora
}

}
