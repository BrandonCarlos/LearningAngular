import { Component, Input, OnInit } from '@angular/core';
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
    this.transferencias = this.service.transferencias;//this.service.getTransferencias sendo jogado no array this.transferencias
  }

}
