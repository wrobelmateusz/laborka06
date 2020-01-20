import { Injectable } from '@angular/core';
import { Wydatek, KATEGORIE } from './wydatek';

@Injectable()
export class WydatkiServiceService {
  private nextId: number;
  private wydatki: Wydatek[];

  constructor() {
    this.wydatki = [
      new Wydatek(1,'Tankowanie', 252.43, '', new Date(2018, 4, 30),14),
      new Wydatek(2,'Myjnia', 75, '', new Date(2018, 4, 2)),
      new Wydatek(3,'Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
      new Wydatek(4,'Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
      new Wydatek(5,'Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 527, 48)
    ];
    this.nextId = 6;
  }
  getWydatki() {
    return this.wydatki;
  }
  getKategorie(): string[] {
    return KATEGORIE;
  }
  dodajWydatek(nowyWydatek: Wydatek): void {
    nowyWydatek.id = this.nextId++;
    this.wydatki.push(nowyWydatek);
  }
  usunWydatek(id: number): void {
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
  }
}