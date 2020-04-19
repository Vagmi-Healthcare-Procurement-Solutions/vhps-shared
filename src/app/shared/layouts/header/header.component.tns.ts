import { Component, OnInit } from '@angular/core';
import * as TNSPhone from 'nativescript-phone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  moduleId: module.id
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public callNow() {
    const phoneNumber = '1234567890';
    TNSPhone.dial(phoneNumber, true);
 }
}
