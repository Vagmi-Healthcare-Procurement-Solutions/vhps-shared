import { Component, OnInit } from '@angular/core';
import { AdvetisersService } from '@src/app/shared/advertisers/advetisers.service';
import { Advertiser } from '@src/app/shared/advertisers/model/advertiser';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss'],
  moduleId: module.id
})
export class AdvertisersComponent implements OnInit {
  adsList: Advertiser[];
  constructor(private advertiserService: AdvetisersService) { }

  ngOnInit() {
    this.advertiserService.getAll().subscribe(ads => this.adsList = ads);
  }

}
