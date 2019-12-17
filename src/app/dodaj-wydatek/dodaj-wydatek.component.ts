import { Component, OnInit } from '@angular/core';
import { Wydatek } from '../wydatek';
import { WydatkiServiceService } from '../wydatki-service.service';

@Component({
  selector: 'app-dodaj-wydatek',
  templateUrl: './dodaj-wydatek.component.html',
  styleUrls: ['./dodaj-wydatek.component.css']
})
export class DodajWydatekComponent implements OnInit {
  kategorie:string[];
  nowyWydatek: Wydatek;
  constructor(private wydatkiServiceService:WydatkiServiceService) { }

  ngOnInit() {
    this.nowyWydatek=new Wydatek('Tankowanie', null, null, null);
    this.kategorie=this.wydatkiServiceService.getKategorie();
  }
  onSubmit() {
    this.wydatkiServiceService.dodajWydatek(this.nowyWydatek);
    this.nowyWydatek = new Wydatek('Tankowanie', null, null, null);
  
  }

}