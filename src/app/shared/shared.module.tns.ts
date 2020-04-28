import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderComponent } from '@src/app/shared/layouts/header/header.component';
import { SideDrawerContentComponent } from '@src/app/shared/layouts/side-drawer-content/side-drawer-content.component';



@NgModule({
  declarations: [HeaderComponent, SideDrawerContentComponent],
  imports: [
    NativeScriptCommonModule
  ],
  exports: [HeaderComponent, SideDrawerContentComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
