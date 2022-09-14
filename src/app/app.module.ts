import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';//Aqui temos os modules para podermos usar em toda nossa aplicação

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';//pegamos lá do site do angular
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');//descrevendo que vou utilizar no idioma pt

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//pegamos do site do angular
    HttpClientModule//Este módulo possui o "HttpClient" <- que importamos lá no arquivo "transferencia.service.ts"
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,//aqui é para trabalharmos com moeda também que será BRL = R$
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
