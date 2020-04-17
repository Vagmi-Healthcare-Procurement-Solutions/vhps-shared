import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { Observable, of } from 'rxjs';
import { Specification } from './model/specification';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsMock: Product[] = [
    <Product> {
      id: 1,
      name: 'DuPont Tyvek 400 Coverall',
      thumbnail: 'https://ik.imagekit.io/medikabazaar/pub/media/catalog/product/cache/2ca6e9134c978dfac17e68ad774c1aea/m/b/mbvin04_a.jpg',
      price: 7400,
      actualPrice: 6800,
      discount: 8.1,
      save: 600,
      features:[
        "Comfort fit design based on extensive wearer input to provide our most comfortable garment design that: enables a greater range of movement while stretching and bending, provides a more tailored fit, offers reinforcement in high stress areas for fewer blowouts, utilizes a longer zipper for easier donning and doffing and an elastic waist to better position the garment",
        "Attached respirator-fit hood with elastic around face opening, designed to cover neck and chin and fit around respirator face mask",
        "Longer zipper extends to chin for complete coverage of neck area",
        "Elastic opening for tighter fit at wrist"
      ],
      specification: [
        <Specification> {key: "Material", value: "Tyvek 400"},
        <Specification> {key: "Design", value: "Coverall w/Resp. Fit Hood, Elastic Wrists, Att. Skid-Resistant Boots"},
        <Specification> {key: "Seam", value: "Serged"},
        <Specification> {key: "Colour", value: "White"}
      ]
    },
    <Product> {
      id: 2,
      name: '3M Safety Goggles, 1709IN',
      thumbnail: 'https://ik.imagekit.io/medikabazaar/pub/media/catalog/product/cache/2ca6e9134c978dfac17e68ad774c1aea/m/b/mbvin09.jpg',
      price: 47900,
      actualPrice: 44200,
      discount: 7.72,
      save: 3700,
      features: [
        "Helps Provide Limited Impact Protection From Flying Particles",
        "Light Weight",
        "Adjustable Temple",
        "Eye Protection Against Dust & Impact",
        "Universal Size"
      ],
      specification: [
        <Specification> {key: "Brand", value: "3M"},
        <Specification> {key: "Lens Material", value: "Polycarbonate"},
        <Specification> {key: "Lens Coating", value: "Anti-Scratch"},
        <Specification> {key: "Lens Colour", value: "Clear"},
        <Specification> {key: "Frame Material", value: "Plastic"},
        <Specification> {key: "Colour", value: "White"},
        <Specification> {key: "Item Weight", value: "450 grams"},
      ]
    },
    <Product> {
      id: 3,
      name: 'CONTEC Infrared Thermometer TP 500',
      thumbnail: 'https://ik.imagekit.io/medikabazaar/pub/media/catalog/product/cache/2ca6e9134c978dfac17e68ad774c1aea/m/b/mbvin23_1.jpg',
      price: 7400,
      actualPrice: 6800,
      discount: 8.1,
      save: 600,
      features: [
        "Memory data: up to 30 readings",
        "Power Supply: AAA batteries",
        "Weight: 130 gms",
        "Protection: IPX0",
      ],
      specification: [
        <Specification> {key: "Range", value: "35-42 °C"},
        <Specification> {key: "Measurement Time", value: "Less than 1 second"},
        <Specification> {key: "Display mode", value: "LCD"},
        <Specification> {key: "Resolution", value: "0.1 °C"},
        <Specification> {key: "Temperature Unit", value: "°C / °F"},
      ]
    },
    <Product> {
      id: 4,
      name: '3 Ply Mask',
      thumbnail: 'https://ik.imagekit.io/medikabazaar/pub/media/catalog/product/cache/2ca6e9134c978dfac17e68ad774c1aea/m/b/mbvin10_1.jpg',
      price: 47900,
      actualPrice: 44200,
      discount: 7.72,
      save: 3700,
    }
  ];

  constructor() { }

  getAll(): Observable<Product []> {
    return of(this.productsMock);
  }

  get(id: number): Observable<Product> {
    return of(this.productsMock.find(product => product.id === id));
  }
}
