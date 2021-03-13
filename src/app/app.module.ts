import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardItemComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
