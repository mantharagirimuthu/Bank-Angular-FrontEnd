import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goldloan',
  templateUrl: './goldloan.component.html',
  styleUrls: ['./goldloan.component.css'],
})
export class GoldloanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  amount1: number = 0;
  dem(val1: number, val2: number) {
    this.amount1 = (val1 * val2 * 0.07) / 100;
    return `${this.amount1}`;
  }
}
