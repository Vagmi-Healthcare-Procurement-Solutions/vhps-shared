import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private page: Page, private router: RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  onRecovery() {
    dialogs.alert({
      title: "Recovery Information",
      message: "Information for recovery was sent, please check your registered email.",
      okButtonText: "Ok"
    }).then(() => {
      this.router.navigate(["login"]);
    });
  }

  onCancel() {
    this.router.navigate(["login"]);
  }

}
