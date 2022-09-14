import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];//lá do GET(transferencia) do service vai vir tudo para o atributo = "transferencias"

  constructor(private service: TransferenciaService) { }//injetando o service(criando instância do service)

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => { //estou me inscrevendo na resposta desse método Observable
      console.table(transferencias);
      this.transferencias = transferencias;//array transferencias recebendo transferencias do parâmetro que chega do GET que fizemos
    })
  }

}
