import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss'],
  moduleId: module.id
})
export class PayComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  continueShopping() {
    this.router.navigate(["home"]);
  }

  goToConfirmation() {
    this.router.navigate(["paymentConfirmation"]);
  }
}
