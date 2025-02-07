import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.page.html',
  styleUrls: ['./adder.page.scss'],
  standalone: false,
})
export class AdderPage implements OnInit {

  number1: number | null = null;
  number2: number | null = null;
  result: number | null = null;

  constructor() {}

  calculateSum() {
    if (this.number1 !== null && this.number2 !== null) {
      this.result = this.number1 + this.number2;
    } else {
      this.result = null;
    }
  }

  ngOnInit() {
  }

}
