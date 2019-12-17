import { Component, OnInit } from '@angular/core';
import { Wydatek, KATEGORIE } from '../wydatek';
import { WydatkiServiceService } from '../wydatki-service.service';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
export class ListaWydatkowComponent implements OnInit {

  constructor(private wydatkiServiceService:WydatkiServiceService) { }

  wydatki: Wydatek[];
    ngOnInit() {
    this.wydatki = this.wydatkiServiceService.getWydatki();
  }

}