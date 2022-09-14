import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({//Aqui temos a classe Componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}

}
