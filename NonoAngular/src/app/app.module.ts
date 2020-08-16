import { NonoGameComponent } from './nonogram-game/nono-game/nono-game.component';
import { NonoTipsUpperComponent } from './nonogram-game/nono-tips-upper/nono-tips-upper.component';
import { NonoTipsLeftComponent } from './nonogram-game/nono-tips-left/nono-tips-left.component';
import { NonoBoardComponent } from './nonogram-game/nono-board/nono-board.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
NonoGameComponent,

    NonoBoardComponent,
    NonoTipsLeftComponent,
    NonoTipsUpperComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
