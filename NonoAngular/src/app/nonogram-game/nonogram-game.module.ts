
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonoBoardComponent } from './nono-board/nono-board.component';
import { NonoTipsLeftComponent } from './nono-tips-left/nono-tips-left.component';
import { NonoTipsUpperComponent } from './nono-tips-upper/nono-tips-upper.component';
import { NonoGameComponent } from './nono-game/nono-game.component';



@NgModule({
  declarations: [NonoBoardComponent, NonoTipsLeftComponent, NonoTipsUpperComponent, NonoGameComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NonoBoardComponent
  ]
})
export class NonogramGameModule { }
