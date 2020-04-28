import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";

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

  onLogin() {
    this.router.navigate(["home"], {clearHistory: true});
  }

  onSignUp() {
    this.router.navigate(["signup"]);
  }

  onForgotPassword() {
    this.router.navigate(["forgotPassword"]);
  }

  onLoginWith() {
    dialogs.alert({
      title: "Alternative login",
      message: "Alternative login is not supported yet.",
      okButtonText: "Ok"
    }).then(() => {
    });
  }

  onSignUpOrForgot() {
    dialogs.action({
      message: "Select and option",
      cancelButtonText: "Cancel",
      actions: ["Sign up", "Forgot password"]
    }).then(result => {
        console.log("Dialog result: " + result);
        if(result == "Sign up"){
            this.onSignUp();
        }else if(result == "Forgot password"){ 
            this.onForgotPassword();
        }
    });
  }

}
