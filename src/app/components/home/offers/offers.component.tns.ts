import { Component, OnInit } from '@angular/core';
import { OffersService } from '@src/app/shared/offers/offers.service';
import { Offer } from '@src/app/shared/offers/model/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  moduleId: module.id
})
export class OffersComponent implements OnInit {
  offersList: Offer[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersList = this.offersService.getAll();
  }

}
