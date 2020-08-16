import { Component, OnInit, Input } from '@angular/core';
import { NonoService } from '../nono.service';

@Component({
  selector: 'app-nono-tips-upper',
  templateUrl: './nono-tips-upper.component.html',
  styleUrls: ['./nono-tips-upper.component.scss']
})
export class NonoTipsUpperComponent implements OnInit {
  @Input() gameArray = [[]];
  upperTips = [
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
  tipsRowBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  tipsCollonBase = [0, 1, 2, 3, 4];
  constructor(private readonly nonoService: NonoService) {}

  ngOnInit(): void {
    this.gameArray = this.nonoService.gameArray;
    this.generateTips();
   
  }

  generateTips(): void {

    for (let row = 0; row < 10; row++) {
      this.tipIndex = 0;
      for (let i = 9; i >= 0; i--) {
          if (this.gameArray[i][row]) {
              this.flagTF = true;
              // jesli jest true (niewaznle czy t byl pierwszy element czy nie
              // ) wiec nie wiemy na ktorym indeksie pracujemy
              if (this.incIndex) {
                  this.tipIndex++;
                  this.incIndex = false;
              }
              if (this.upperTips[row][this.tipIndex] === '') {
                  // jesli obecnego indeksu nie uzyto, to zainicjalizuj zerem
                  this.upperTips[row][this.tipIndex] = (0).toString();
              }
              // dodajemy do obecnego indeksu +1
              const x = (Number(this.upperTips[row][this.tipIndex]) + 1).toString();
              this.upperTips[row][this.tipIndex] = x;
          } else {
              if (this.flagTF) {
                  this.incIndex = true;
              }
              this.flagTF = false;
          }
      }// for wew
  }// for zew

    for (let i = 0; i < 10; i++) {
      if (this.upperTips[i][0] === '') {
        this.upperTips[i].shift();
        this.upperTips[i].push('');
      }



      // fill tips right
      for (let i = 0; i < 10; i++) {
        let a = this.upperTips[i];
        console.log('a',a);
        this.upperTips[i] = [];
        for (let j = 0; j < a.length; j++) {
          if (a[j] !== '') {
            this.upperTips[i].push(a[j]);
          }
      //    this.leftTips[i].reverse();
          
          //    document.getElementById('r' + i + Number(j + 1)).innerText = this.leftTips[i][j];
        }

        console.log('lT',this.upperTips[i]);
      }

    }

    for(let i=0;i<this.upperTips.length;i++){
      const x = 5-this.upperTips[i].length;
      for(let j=0;j<x;j++){
        this.upperTips[i].push('');
      }
      this.upperTips[i].reverse();
  }

  }//generatetips

}
