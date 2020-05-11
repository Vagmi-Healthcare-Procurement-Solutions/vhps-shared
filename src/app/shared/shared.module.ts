import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@src/app/shared/layouts/header/header.component';
import { SideDrawerContentComponent } from '@src/app/shared/layouts/side-drawer-content/side-drawer-content.component';


@NgModule({
  declarations: [HeaderComponent, SideDrawerContentComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
