import { InitValues } from './../init-values';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nono-game',
  templateUrl: './nono-game.component.html',
  styleUrls: ['./nono-game.component.scss']
})
export class NonoGameComponent implements OnInit {
  @Input() parentCaughtMode = 'no';
  @Input() parentCaughLives = new InitValues().getLives();
  gameArrayCopy: boolean[][] = [[]];
  constructor() { }

  ngOnInit(): void {
  }

  changeLives(e: any): void {
    this.parentCaughLives = e;
    console.log('odebrakem event, ilves:', e);
  }
  
  onModeChange(e: any): void {
    console.log('caught mode:', e);
    this.parentCaughtMode = e;
  }
  newGame(){
    console.log("new game signal nonogame");
  }

}
