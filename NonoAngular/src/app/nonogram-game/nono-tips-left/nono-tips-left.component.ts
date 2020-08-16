import { NonoService } from './../nono.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nono-tips-left',
  templateUrl: './nono-tips-left.component.html',
  styleUrls: ['./nono-tips-left.component.scss']
})
export class NonoTipsLeftComponent implements OnInit {
  @Input() gameArray = [[]];
  leftTips = [
    ['', '', '', '', '', ''], // jest po 6, bo mam gdzies buga i nie zaczyna od 0 tylko od 1, ale potem wszystko przesuwam i dziala
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', '']
  ];

  incIndex = false;
  tipIndex = 0;
  flagTF = false;
  tipsRowBase = [0, 1, 2, 3, 4];
  tipsCollonBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private readonly nonoService: NonoService) {

  }

  ngOnInit(): void {
    this.gameArray = this.nonoService.gameArray;
    this.generateTips();
   
  }

  generateTips(): void {

    for (let column = 0; column < 10; column++) {
      this.tipIndex = 0;
      for (let i = 9; i >= 0; i--) {
        if (this.gameArray[column][i]) {
          this.flagTF = true;
          // jesli jest true (niewaznle czy t byl pierwszy element czy nie
          // ) wiec nie wiemy na ktorym indeksie pracujemy
          if (this.incIndex) {
            this.tipIndex++;
            this.incIndex = false;
          }
          if (this.leftTips[column][this.tipIndex] === '') {
            // jesli obecnego indeksu nie uzyto, to zainicjalizuj zerem
            this.leftTips[column][this.tipIndex] = (0).toString();
          }
          // dodajemy do obecnego indeksu +1
          let x = (Number(this.leftTips[column][this.tipIndex]) + 1).toString();
          this.leftTips[column][this.tipIndex] = x;
        } else {
          if (this.flagTF) {
            this.incIndex = true;
          }
          this.flagTF = false;
        }
      }// for wew
    }// for zew

    for (let i = 0; i < 10; i++) {
      if (this.leftTips[i][0] === '') {
        this.leftTips[i].shift();
        this.leftTips[i].push('');
      }



      // fill tips right
      for (let i = 0; i < 10; i++) {
        let a = this.leftTips[i];
        console.log('a',a);
        this.leftTips[i] = [];
        for (let j = 0; j < a.length; j++) {
          if (a[j] !== '') {
            this.leftTips[i].push(a[j]);
          }
      //    this.leftTips[i].reverse();
          
          //    document.getElementById('r' + i + Number(j + 1)).innerText = this.leftTips[i][j];
        }

        console.log('lT',this.leftTips[i]);
      }

    }

    for(let i=0;i<this.leftTips.length;i++){
      const x = 5-this.leftTips[i].length;
      for(let j=0;j<x;j++){
        this.leftTips[i].push('');
      }
      this.leftTips[i].reverse();
  }

  }//generatetips
}
