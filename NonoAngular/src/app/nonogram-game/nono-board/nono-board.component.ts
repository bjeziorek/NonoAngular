import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nono-board',
  templateUrl: './nono-board.component.html',
  styleUrls: ['./nono-board.component.scss']
})
export class NonoBoardComponent implements OnInit {

  boardBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit(): void {
  }

}
