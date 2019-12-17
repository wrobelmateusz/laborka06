import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaWydatkowComponent } from './lista-wydatkow/lista-wydatkow.component';
import { WydatkiServiceService } from './wydatki-service.service';
import { DodajWydatekComponent } from './dodaj-wydatek/dodaj-wydatek.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListaWydatkowComponent, DodajWydatekComponent],
  bootstrap:    [ AppComponent ],
  providers: [WydatkiServiceService]
})
export class AppModule { }
