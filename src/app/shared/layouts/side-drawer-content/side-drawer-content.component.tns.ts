import { Component, OnInit } from '@angular/core';
import { UiService } from '../../ui/ui.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-side-drawer-content',
  templateUrl: './side-drawer-content.component.html',
  styleUrls: ['./side-drawer-content.component.scss'],
  moduleId: module.id
})
export class SideDrawerContentComponent implements OnInit {

  constructor(private uiService: UiService, private router: RouterExtensions, private userService: UserService) { }

  ngOnInit() {
  }

  onLogout() {
    this.uiService.toggleDrawer();
    this.router.navigate(["login"]);
  }

  get currentUser(): string {
    return this.userService.userName;
  }

}
