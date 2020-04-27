import { Routes } from "@angular/router";

import { HomeComponent } from "@src/app/views/home/home.component";
import { LoginComponent } from "@src/app/views/login/login.component";
import { SignupComponent } from "@src/app/views/signup/signup.component";
import { DetailsComponent } from "@src/app/views/product/details/details.component";
import { CartComponent } from "@src/app/views/cart/cart.component";
import { PayComponent } from "@src/app/views/payment/pay/pay.component";
import { PaymentConfirmationComponent } from "@src/app/views/payment/payment-confirmation/payment-confirmation.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: "details/:productId", component: DetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PayComponent },
  { path: "paymentConfirmation", component: PaymentConfirmationComponent }
];
