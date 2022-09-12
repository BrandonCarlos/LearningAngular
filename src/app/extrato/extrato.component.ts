import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[];//Ou seja ta recebendo a propriedade "transferencia" junto com o "valor e destino" e ta recebendo any, que pode ser qualquer coisa, inclusive objeto

  constructor() { }

  ngOnInit(): void {
  }

}
