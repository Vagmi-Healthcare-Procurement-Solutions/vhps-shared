import {
  Component,
  OnInit
} from "@angular/core";
import * as TNSPhone from "nativescript-phone";
import { RouterExtensions } from "nativescript-angular/router";
import { UiService } from "../../ui/ui.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  moduleId: module.id,
})
export class HeaderComponent implements OnInit {
  constructor(private router: RouterExtensions, private uiService: UiService) {}

  ngOnInit() {}

  goToCart() {
    this.router.navigate(["cart"]);
  }

  public callNow() {
    const phoneNumber = "1234567890";
    TNSPhone.dial(phoneNumber, true);
  }

  openDrawer() {
    this.uiService.toggleDrawer();
  }
}
