import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderComponent } from '@src/app/shared/layouts/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [HeaderComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
