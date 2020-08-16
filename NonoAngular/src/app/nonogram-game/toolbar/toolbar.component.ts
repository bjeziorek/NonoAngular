import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() mode = new EventEmitter();
  innerMode = 'no';
  innerModeYes = false;
  innerModeNo = true;
  innerModeTry = false;
  infoText = 'tryb zaznaczania pól podejrzanych o puste';
  constructor() { }

  ngOnInit(): void {
  }
  yesNoMarkerLabelBtn(mode: string): void {
    switch (mode) {
      case 'yes':
        this.infoText = 'tryb zaznaczania pól właściwych';
        this.innerModeYes = true;
        this.innerModeNo = false;
        this.innerModeTry = false;
        break;
      case 'no':
        this.infoText = 'tryb zaznaczania pól podejrzanych o puste';
        this.innerModeYes = false;
        this.innerModeNo = true;
        this.innerModeTry = false;
        break;
      case 'try':
        this.infoText = 'tryb zaznaczania pól podejrzanych o właściwe';
        this.innerModeYes = false;
        this.innerModeNo = false;
        this.innerModeTry = true;
        break;
      default:
        this.infoText = 'jakiś błąd switcha... O_o';
        break;
    }//switch
    this.innerMode = mode;
    //wyslij gdzies mode!!!!!!!!!!!!!!!, zeby pobieral je od razu click/zmienianie kursora
    this.mode.emit(mode);

  }//yesNo...

}//toolbar component class
