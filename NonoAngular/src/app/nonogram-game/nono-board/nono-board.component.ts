import { NonoService } from './../nono.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nono-board',
  templateUrl: './nono-board.component.html',
  styleUrls: ['./nono-board.component.scss']
})
export class NonoBoardComponent implements OnInit {
  @Input() inputMode = 'no';
  @Output() outputGameArray = new EventEmitter();
  boardBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  gameArray: boolean[][] = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ];
  constructor(private readonly nonoService: NonoService) {
    this.fill();
  }

  ngOnInit(): void {

  }

  clickField(e: MouseEvent): void {
    const id = (e.target as HTMLDivElement).id; // jako field xy
    const x = id.slice(5, 6);
    const y = id.slice(6, 7);
    console.log(x, y, this.gameArray[x][y]);
    if (this.gameArray[x][y]) {
      (e.target as HTMLDivElement).classList.add('goodClick');
    } else {
      (e.target as HTMLDivElement).classList.add('badClick');
    }

    //
  }

  fill(): void {
    let result = false;
    let resultSum = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const r = Math.floor(Math.random() * 10);
        result = r > 5;
        this.gameArray[i][j] = result;
        if (result) {
          resultSum++;
        }
        //   document.getElementById('field' + i + j).style.backgroundColor = result ? 'white' : 'white'; // pierwsze white zaniemic np na green i sa cheatynpi
        //   document.getElementById('field' + i + j).dataset.f = result ? 'p' : 'f';
      }
    }
    //  document.getElementById('field00').dataset.sum = resultSum.toString();
    //  document.getElementById('field00').dataset.progress = '0';
    console.log(this.nonoService.gameArray,this.gameArray);
    this.nonoService.gameArray = this.gameArray;
  }// fillboard
}
