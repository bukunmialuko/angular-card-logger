import { Component } from '@angular/core';
import { Card } from './card-item/card.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onCardSaved(card: Card): void {
    console.log('Card details: ', card);
  }
}
