import { Component } from '@angular/core';
import { Card } from './card-item/card.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards: Card[]

  constructor() {
    this.cards = [
      new Card("Aluko Bukunmi", "544444444444", "042021", "123"),
      new Card("Aluko Bukunmi", "444444444444", "042021", "123"),
      new Card("Aluko Bukunmi", "344444444444", "042021", "123")
    ];
  }

  onCardSaved(card: Card): void {
    this.cards.push(card);
  }

  clearList() {
    console.log("Emmits")
    this.cards = [];
  }
}
