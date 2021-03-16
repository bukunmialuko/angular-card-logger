import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card-item/card.model'

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  @Output() clearListEmitter: EventEmitter<number>;


  @Input() cards: Card[]

  constructor() {
    this.clearListEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clearList() {
    console.log("clearList 1")
    this.clearListEmitter.emit(0)
  }

  addCard(card: Card): boolean {
    this.cards.push(card);
    return false;
  }


}
