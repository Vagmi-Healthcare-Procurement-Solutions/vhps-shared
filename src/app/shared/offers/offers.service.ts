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
      imageURL: 'https://previews.123rf.com/images/macrovector/macrovector1907/macrovector190700209/127230205-neurological-medial-health-center-home-page-isometric-horizontal-web-banner-with-hospitalized-patien.jpg',
      shortDescription: 'Oxygize for COVID-19',
      longDescription: 'Oxygize provides you with an easy access to your personal oxygen canisters during this pandemic crisis'
    },
    <Offer> {
      id: 2,
      imageURL: 'https://st3.depositphotos.com/1006318/13691/v/1600/depositphotos_136918272-stock-illustration-group-medial-doctors-team-clinic.jpg',
      shortDescription: 'Setup your physiotherapy clinit',
      longDescription: 'Setup your physiotherapy clinit at lowest cost'
    },
  ];

  constructor() { }

  getAll(): Offer [] {
    return this.offersMock;
  }
}
