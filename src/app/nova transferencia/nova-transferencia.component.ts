import { Component } from "@angular/core";

@Component({//Está é minha classe, e é aqui que vou colocar os métodos de click, submit, etc...
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {//Aqui que vai ter nossas lógicas e nossos métodos, como está CLASS é export, então temos váriaveis
  //que podem ser acessadas fora desta classe em outro arquivo

  valor: number = 12;
  destino: number = 24;


  transferir() {
    console.log('Solciitado nova transferencia');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }

}
