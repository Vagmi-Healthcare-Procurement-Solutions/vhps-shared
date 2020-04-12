import { Routes } from "@angular/router";

import { HomeComponent } from "@src/app/views/home/home.component";
import { LoginComponent } from "@src/app/views/login/login.component";
import { SignupComponent } from "@src/app/views/signup/signup.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
];
