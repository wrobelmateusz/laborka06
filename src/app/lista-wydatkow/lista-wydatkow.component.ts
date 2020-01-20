import { Component, OnInit } from '@angular/core';
import { Wydatek, KATEGORIE } from '../wydatek';
import { WydatkiServiceService } from '../wydatki-service.service';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
export class ListaWydatkowComponent implements OnInit {
  
  wydatki: Wydatek[];
  constructor(private wydatkiServiceService:WydatkiServiceService) { }

    ngOnInit() {
    this.wydatki = this.wydatkiServiceService.getWydatki();
  }
  usunWydatek(id: number) {
    this.wydatkiServiceService.usunWydatek(id);
  }
  
}