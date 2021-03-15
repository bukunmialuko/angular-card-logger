import { Component, OnInit } from '@angular/core';
import { Card } from '../card-item/card.model'

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  cards: Card[]

  constructor() {
    this.cards = [
      new Card("Aluko Bukunmi", "544444444444", "042021", "123"),
      new Card("Aluko Bukunmi", "444444444444", "042021", "123"),
      new Card("Aluko Bukunmi", "344444444444", "042021", "123")
    ];
  }

  ngOnInit(): void {
  }

  clearList() {
    this.cards = [];
  }

}
