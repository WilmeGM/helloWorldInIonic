import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-translator',
  templateUrl: './number-translator.page.html',
  styleUrls: ['./number-translator.page.scss'],
  standalone: false,
})
export class NumberTranslatorPage implements OnInit {

  number: number | null = null;
  translatedText: string = '';

  constructor() {}

  translateNumber() {
    if (this.number === null || this.number < 1 || this.number > 1000) {
      this.translatedText = 'Please enter a number between 1 and 1000';
      return;
    }
    this.translatedText = this.getNumberInWords(this.number);
  }

  getNumberInWords(num: number): string {
    const units = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const tens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const hundreds = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (num === 1000) return 'mil';
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) return num % 10 === 0 ? tens[Math.floor(num / 10)] : `${tens[Math.floor(num / 10)]} y ${units[num % 10]}`;
    if (num < 200) return num === 100 ? 'cien' : `ciento ${this.getNumberInWords(num % 100)}`;
    return num % 100 === 0 ? hundreds[Math.floor(num / 100)] : `${hundreds[Math.floor(num / 100)]} ${this.getNumberInWords(num % 100)}`;
  }

  ngOnInit() {
  }

}
