import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Login } from "@src/app/shared/user/model/login";
import { UserService } from "@src/app/shared/user/user.service";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  login: Login = <Login>{};

  errorMessages = {
    enterEmail: "Please enter an email",
    enterPassword: "Please enter a password",
    invalidEmail: "Please enter a valid email address",
    invalidPassword: "Please enter a valid password, min length is 8 chars",
    invalidForm: "Invalid login or password"
  };

  emailErrorMessage;
  passwordErrorMessage;
  submitErrorMessage;

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.loginForm.get('username').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      next => {
        const emailEl = <FormControl>this.loginForm.get('username');
        if (emailEl.valid) {
          this.emailErrorMessage = undefined;
        }
        if (emailEl.dirty && !emailEl.valid) {
          if (!!next) {
            this.emailErrorMessage = this.errorMessages.invalidEmail
          } else {
            this.emailErrorMessage = this.errorMessages.enterEmail
          }
        }
      }
    );

    this.loginForm.get('password').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      next => {
        const passwordEl = <FormControl>this.loginForm.get('password');
        if (passwordEl.valid) {
          this.passwordErrorMessage = undefined;
        }
        if (passwordEl.dirty && !passwordEl.valid) {
          if (!!next) {
            this.passwordErrorMessage = this.errorMessages.invalidPassword
          } else {
            this.passwordErrorMessage = this.errorMessages.enterPassword
          }
        }
      }
    );
  }

  onLogin() {
    if (this.loginForm.pristine) {
      this.emailErrorMessage = this.errorMessages.enterEmail;
      this.passwordErrorMessage = this.errorMessages.enterPassword;
      return;
    }

    if (!this.loginForm.valid) {
      return;
    }

    this.login.username = this.loginForm.get('username').value;
    this.login.password = this.loginForm.get('password').value;

    this.userService.login(this.login).subscribe(
      (response) => {
        this.userService.userName = this.login.username;
        this.userService.token = response.token;
        this.router.navigate(["home"], { clearHistory: true });
      },
      (error) => {
        this.submitErrorMessage = this.errorMessages.invalidForm;
      }
    );
  }

  onSignUp() {
    this.router.navigate(["signup"]);
  }

  onForgotPassword() {
    this.router.navigate(["forgotPassword"]);
  }

  /*onLoginWith() {
    dialogs
      .alert({
        title: "Alternative login",
        message: "Alternative login is not supported yet.",
        okButtonText: "Ok",
      })
      .then(() => {});
  }*/

  onSignUpOrForgot() {
    dialogs
      .action({
        message: "Select and option",
        cancelButtonText: "Cancel",
        actions: ["Sign up", "Forgot password"],
      })
      .then((result) => {
        console.log("Dialog result: " + result);
        if (result == "Sign up") {
          this.onSignUp();
        } else if (result == "Forgot password") {
          this.onForgotPassword();
        }
      });
  }
}
