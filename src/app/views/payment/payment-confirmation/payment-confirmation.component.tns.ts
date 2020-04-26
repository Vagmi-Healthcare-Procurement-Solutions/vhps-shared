import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss'],
  moduleId: module.id
})
export class PaymentConfirmationComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  continueShopping() {
    this.router.navigate(["home"]);
  }

}
