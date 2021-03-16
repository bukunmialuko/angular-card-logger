import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card-item/card.model'

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  @Input() cards: Card[]

  constructor() {
  }

  ngOnInit(): void {
  }

  clearList() {
    this.cards = [];
  }

  addCard(card: Card): boolean {
    this.cards.push(card);
    return false;
  }


}
