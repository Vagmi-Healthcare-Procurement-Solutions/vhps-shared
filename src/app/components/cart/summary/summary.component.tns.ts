import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  moduleId: module.id
})
export class SummaryComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  continueShopping() {
    this.router.navigate(["home"]);
  }

}
