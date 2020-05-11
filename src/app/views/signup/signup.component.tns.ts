import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserService } from '@src/app/shared/user/user.service';
import { User } from '@src/app/shared/user/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  moduleId: module.id
})
export class SignupComponent implements OnInit {
  user: User = <User> {
    vendor: false,
    customer: true,
    delivery: false
  };

  constructor(private page: Page, private router: RouterExtensions, private userService: UserService) { }

  ngOnInit() {
    this.page.actionBarHidden=true;
  }

  onSignUp() {
    this.userService.signUp(this.user).subscribe(
      () => this.router.navigate(["login"], {clearHistory: true}),
      error => console.log(error)
    );
  }

  onSignIn() {
    this.router.navigate(["login"]);
  }

  onToggleVendor() {
    this.user.vendor = !this.user.vendor;
  }

  onToggleDelivery() {
    this.user.delivery = !this.user.delivery;
  }

}
