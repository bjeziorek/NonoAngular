import { InitValues } from './../init-values';
import { NonoService } from './../nono.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() mode = new EventEmitter();
  @Output() newGameSignal = new EventEmitter();
  @Input() inputLives = new InitValues().getLives();
  endGameInfo = '';


  innerMode = 'no';
  innerModeYes = 'inactive';
  innerModeNo = 'active';
  innerModeTry = 'inactive';
  infoText = 'tryb zaznaczania pól podejrzanych o puste';
  constructor(private readonly nonoService: NonoService) { }




  newGame(): void {
    //this.newGameSignal.emit();
    this.nonoService.newGameSignal.next(true);
  }

  ngOnInit(): void {
    this.nonoService.endGameSignal.subscribe(data => {
      this.endGameInfo = 'koniec gry';
    });
    this.nonoService.newBoardReady.subscribe(data => {
      this.endGameInfo = '';
    });
  }
  yesNoMarkerLabelBtn(mode: string): void {
    switch (mode) {
      case 'yes':
        this.infoText = 'tryb zaznaczania pól właściwych';
        this.innerModeYes = 'active';
        this.innerModeNo = 'inactive';
        this.innerModeTry = 'inactive';
        break;
      case 'no':
        this.infoText = 'tryb zaznaczania pól podejrzanych o puste';
        this.innerModeYes = 'inactive';
        this.innerModeNo = 'active';
        this.innerModeTry = 'inactive';
        break;
      case 'try':
        this.infoText = 'tryb zaznaczania pól podejrzanych o właściwe';
        this.innerModeYes = 'inactive';
        this.innerModeNo = 'inactive';
        this.innerModeTry = 'active';
        break;
      default:
        this.infoText = 'jakiś błąd switcha... O_o';
        break;
    }// switch
    this.innerMode = mode;
    // wyslij gdzies mode!!!!!!!!!!!!!!!, zeby pobieral je od razu click/zmienianie kursora
    this.mode.emit(mode);

  }// yesNo...

}// toolbar component class
