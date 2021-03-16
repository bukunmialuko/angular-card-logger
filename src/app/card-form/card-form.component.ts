import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from '../card-item/card.model'

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  card: Card;

  @Output() onCardSaved: EventEmitter<Card>;

  constructor() {
    this.card = new Card("", "", "", "");
    this.onCardSaved = new EventEmitter();
  }

  ngOnInit(): void {
  }

  saveCard(card: Card): void {
    this.onCardSaved.emit(card);
  }

}
