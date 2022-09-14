import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({//Aqui temos a classe Componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {//fazendo a injeção de dependência(instanciando a classe TransferenciaService)

  }

  //este componente principal já não tem responsabilidade de fazer lógica, para isso temos o service
  transferir($event) {//Recebemos o evento e propagamos para o service
    this.service.adicionar($event);

  }
}
