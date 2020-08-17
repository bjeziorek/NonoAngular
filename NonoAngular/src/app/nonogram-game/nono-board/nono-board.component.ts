import { InitValues } from './../init-values';
import { NonoService } from './../nono.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nono-board',
  templateUrl: './nono-board.component.html',
  styleUrls: ['./nono-board.component.scss']
})
export class NonoBoardComponent implements OnInit {
  @Input() inputMode = 'no';
  // @Output() outputGameArray = new EventEmitter();
  @Output() livesCurrentValue = new EventEmitter();
  field: HTMLCollectionOf<Element>;
  lives = new InitValues().getLives();
  endGame = false;
  resultSum = 0;
  score = 0;
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
    this.start();
  }

  start() {

    this.gameArray = [
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
    this.fill();
    this.lives = new InitValues().getLives();
    this.livesCurrentValue.emit(this.lives);


  }


  clearClasses() {
    //clear classnames of fields
    for (let i = 0; i < 100; i++) {
      (this.field[i] as HTMLDivElement).classList.remove('goodClick');
      (this.field[i] as HTMLDivElement).classList.remove('badClick');
      (this.field[i] as HTMLDivElement).classList.remove('badClick2');
      (this.field[i] as HTMLDivElement).classList.remove('blue');
    }
    this.endGame = false;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.field = document.getElementsByClassName('field');


  }

  ngOnInit(): void {
    this.nonoService.newGameSignal.subscribe(data => {
      console.log('odebrano sygnal new game w nono board');
      this.start();
      this.clearClasses();
      this.nonoService.newBoardReady.next(true);
    });
  }
  revealBoard() {
    let k = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.gameArray[i][j] && (!(this.field[k] as HTMLDivElement).classList.contains('goodClick'))) {
          (this.field[k] as HTMLDivElement).classList.add('blue');
        }else{
          if  (!(this.field[k] as HTMLDivElement).classList.contains('badClick')&&(!(this.field[k] as HTMLDivElement).classList.contains('goodClick'))) {
      
          (this.field[k] as HTMLDivElement).classList.add('badClick2');
          }
        }
        k++;
      }
    }

    console.log('reveal board');
  }
  clickField(e: MouseEvent): void {
    const id = (e.target as HTMLDivElement).id; // jako field xy
    const x = id.slice(5, 6);
    const y = id.slice(6, 7);
    console.log(this.inputMode);
    if (!this.endGame) {
      if ((e.target as HTMLDivElement).classList.contains('goodClick') ||
        (e.target as HTMLDivElement).classList.contains('badClick')
      ) {
        //nie reaguj na klikniecie, bo klocki sa juz odkryte
      } else {

        switch (this.inputMode) {
          case 'yes':
            (e.target as HTMLDivElement).innerText = '';
            if (this.gameArray[x][y]) {
              (e.target as HTMLDivElement).classList.add('goodClick');
              this.score++;
              if (this.score == this.resultSum) {
                console.log(this.score, this.resultSum);
                this.endGame = true;
                this.nonoService.endGameSignal.next();
                this.revealBoard();
              }
            } else {
              (e.target as HTMLDivElement).classList.add('badClick');

              if (this.lives === 0) {
                console.log('koniec gry');
                this.endGame = true;
                this.nonoService.endGameSignal.next();
                this.revealBoard();
              } else {
                this.lives--;
                this.livesCurrentValue.emit(this.lives);
              }
            }
            break;
          case 'no':
            (e.target as HTMLDivElement).innerText = 'x';
            break;
          case 'try':
            (e.target as HTMLDivElement).innerText = '?';
            break;
        }// switch
      }//else ifa gdy pole nie jest odkryte
    }//if not end game
  }

  fill(): void {
    let result = false;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const r = Math.floor(Math.random() * 10);
        result = r > 5;
        this.gameArray[i][j] = result;
        if (result) {
          this.resultSum++;
        }
      }
    }
    this.nonoService.gameArray = this.gameArray;
  }// fillboard
}
