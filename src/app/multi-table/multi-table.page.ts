import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-table',
  templateUrl: './multi-table.page.html',
  styleUrls: ['./multi-table.page.scss'],
  standalone: false,
})
export class MultiTablePage implements OnInit {

  number: number | null = null;
  multiplicationTable: string[] = [];

  constructor() {}

  generateTable() {
    if (!this.number || this.number <= 0) {
      this.multiplicationTable = ['Please enter a valid number'];
      return;
    }

    this.multiplicationTable = Array.from({ length: 13 }, (_, i) =>
      `${this.number} x ${i + 1} = ${this.number! * (i + 1)}`
    );
  }

  ngOnInit() {
  }

}
