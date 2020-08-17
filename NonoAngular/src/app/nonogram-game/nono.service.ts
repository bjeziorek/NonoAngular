import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NonoService {

  gameArray: boolean[][] = [[]];
  newGame: boolean;

  newBoardReady = new Subject();

  endGameSignal = new Subject();

  newGameSignal = new Subject();
  constructor() { }
}
