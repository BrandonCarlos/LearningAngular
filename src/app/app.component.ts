import { Component } from '@angular/core';

@Component({//Aqui temos a classe Componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];//inicializando vázio

  //abaixo temos "transferir($event)" nesse $event tem {valor, destino} que foi propagado para nós usarmos atráves do método "emit"
  transferir($event) {//utilizando o método transferir para alterar algo de última hora, como parâmetro temos os dados enviados via INPUT pelo usuário
    console.log($event);//ta mostrando = {valor = 432, destino = 1312}
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia); //ou seja to mandando p/ o app.component.html o objeto com os atributos "valor e destino e data"
  }
}
