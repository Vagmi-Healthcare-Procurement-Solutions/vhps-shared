import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/views/home/home.component';
import { LoginComponent } from '@src/app/views/login/login.component';
import { OffersComponent } from '@src/app/components/home/offers/offers.component';
import { SignupComponent } from '@src/app/views/signup/signup.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { ProductsComponent } from '@src/app/components/home/products/products.component';
import { DetailsComponent } from '@src/app/views/product/details/details.component';
import { CategoriesComponent } from '@src/app/components/home/categories/categories.component';
import { BrandsComponent } from '@src/app/components/home/brands/brands.component';
import { CartComponent } from '@src/app/views/cart/cart.component';
import { AdvertisersComponent } from '@src/app/components/home/advertisers/advertisers/advertisers.component';
import { SummaryComponent } from '@src/app/components/cart/summary/summary.component';
import { CartProductComponent } from '@src/app/components/cart/cart-product/cart-product.component';
import { PayComponent } from '@src/app/views/payment/pay/pay.component';
import { PaymentConfirmationComponent } from '@src/app/views/payment/payment-confirmation/payment-confirmation.component';
import { ForgotPasswordComponent } from '@src/app/views/forgot-password/forgot-password.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { CheckboxComponent } from '@src/app/components/ui/checkbox/checkbox.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    OffersComponent,
    ProductsComponent,
    DetailsComponent,
    CategoriesComponent,
    BrandsComponent,
    CartComponent,
    AdvertisersComponent,
    SummaryComponent,
    CartProductComponent,
    PayComponent,
    PaymentConfirmationComponent,
    ForgotPasswordComponent,
    CheckboxComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
