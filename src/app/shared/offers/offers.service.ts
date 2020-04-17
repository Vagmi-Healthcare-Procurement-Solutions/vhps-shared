import { Injectable } from '@angular/core';
import { Offer } from './model/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  // Offers mock response
  offersMock: Offer []= [
    <Offer> {
      id: 1,
      imageURL: 'https://medicalbazzar.com/image/cache/catalog/Banners/oxy%20906%20X%20450%20(1)-906x460.jpg',
      shortDescription: 'Oxygize for COVID-19',
      longDescription: 'Oxygize provides you with an easy access to your personal oxygen canisters during this pandemic crisis'
    },
    <Offer> {
      id: 2,
      imageURL: 'https://medicalbazzar.com/image/cache/catalog/Banners/Physiotherapy%20Clinic%20Setup-906x460.png',
      shortDescription: 'Setup your physiotherapy clinit',
      longDescription: 'Setup your physiotherapy clinit at lowest cost'
    },
  ];

  constructor() { }

  getAll(): Offer [] {
    return this.offersMock;
  }
}
