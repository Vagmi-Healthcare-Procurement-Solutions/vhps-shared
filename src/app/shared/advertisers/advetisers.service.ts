import { Injectable } from '@angular/core';
import { Advertiser } from './model/advertiser';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvetisersService {
  adListMock: Advertiser [] = [
    <Advertiser>{
      id: 1,
      name: 'Ad 1',
      imageURL: 'https://ik.imagekit.io/medikabazaar/pub/media/Respiratory-Web-Banner.png'
    },
    <Advertiser>{
      id: 2,
      name: 'Ad 2',
      imageURL: 'https://ik.imagekit.io/medikabazaar/pub/media/Patient-Monitor-Web-Banner.jpg'
    }
  ];
  constructor() { }

  getAll(): Observable<Advertiser []> {
    return of(this.adListMock);
  }
}
