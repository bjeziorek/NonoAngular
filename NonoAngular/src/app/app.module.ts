import { ToolbarComponent } from './nonogram-game/toolbar/toolbar.component';
import { NonoGameComponent } from './nonogram-game/nono-game/nono-game.component';
import { NonoTipsUpperComponent } from './nonogram-game/nono-tips-upper/nono-tips-upper.component';
import { NonoTipsLeftComponent } from './nonogram-game/nono-tips-left/nono-tips-left.component';
import { NonoBoardComponent } from './nonogram-game/nono-board/nono-board.component';
import {MatButtonModule} from '@angular/material/button'; 


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NonoGameComponent,
    ToolbarComponent,
    NonoBoardComponent,
    NonoTipsLeftComponent,
    NonoTipsUpperComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
