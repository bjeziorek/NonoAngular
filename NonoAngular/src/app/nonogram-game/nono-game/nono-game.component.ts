import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nono-game',
  templateUrl: './nono-game.component.html',
  styleUrls: ['./nono-game.component.scss']
})
export class NonoGameComponent implements OnInit {
  @Input() parentCaughtMode = 'no';
  gameArrayCopy: boolean[][] = [[]];
  constructor() { }

  ngOnInit(): void {
  }

  catchGameArray(e: boolean[][]): void{
    this.gameArrayCopy = e;
  }
  onModeChange(e: any): void {
    console.log('caught mode:', e);
    this.parentCaughtMode = e;
  }

}
