import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Calculator', url: '/adder', icon: 'calculator' },
    { title: 'Number Translator', url: '/number-translator', icon: 'language' },
    { title: 'Multiplication Table', url: '/multi-table', icon: 'grid' },
    { title: 'My Experience', url: '/video', icon: 'videocam' },
  ];

  public labels = [];

  constructor() {}
}
