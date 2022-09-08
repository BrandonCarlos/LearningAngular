import { Component } from '@angular/core';

@Component({//Aqui temos a classe Componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  transferir($event) {
    console.log($event);//ta mostrando = {valor = 432, destino = 1312}
    this.transferencia = $event; //ou seja to mandando p/ o app.component.html o objeto com os atributos "valor e destino"
  }
}
