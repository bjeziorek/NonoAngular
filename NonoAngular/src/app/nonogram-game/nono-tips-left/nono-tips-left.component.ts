import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nono-tips-left',
  templateUrl: './nono-tips-left.component.html',
  styleUrls: ['./nono-tips-left.component.scss']
})
export class NonoTipsLeftComponent implements OnInit {
  tipsRowBase = [0, 1, 2, 3, 4];
  tipsCollonBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit(): void {
  }

}
