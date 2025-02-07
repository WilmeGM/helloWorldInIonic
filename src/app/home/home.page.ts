import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  fullName: string = "Wilme Gonzalez";
  email: string = "wilgm211@gmail.com";

  constructor() {}

  ngOnInit() {}
}
