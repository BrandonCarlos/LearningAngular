import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//Aqui temos os modules para podermos usar em toda nossa aplicação

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';//pegamos lá do site do angular

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//pegamos do site do angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
