import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  moduleId: module.id
})
export class LoginComponent implements OnInit {
  @ViewChild("password", {static: false}) password: ElementRef;

  constructor(private page: Page, private router: RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }

  onSignUp() {
    this.router.navigate(["signup"]);
  }

}
