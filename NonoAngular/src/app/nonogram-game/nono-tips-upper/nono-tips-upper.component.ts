import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nono-tips-upper',
  templateUrl: './nono-tips-upper.component.html',
  styleUrls: ['./nono-tips-upper.component.scss']
})
export class NonoTipsUpperComponent implements OnInit {
  tipsRowBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  tipsCollonBase = [0, 1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
