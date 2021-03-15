import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Card } from './card.model'

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
