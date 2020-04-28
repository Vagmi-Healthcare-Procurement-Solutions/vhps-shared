import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  moduleId: module.id
})
export class SignupComponent implements OnInit {
  isVendor: boolean = false;
  isDelivery: boolean = false;

  constructor(private page: Page, private router: RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden=true;
  }

  onSignIn() {
    this.router.navigate(["login"]);
  }

  onToggleVendor() {
    this.isVendor = !this.isVendor;
  }

  onToggleDelivery() {
    this.isDelivery = !this.isDelivery;
  }

}
