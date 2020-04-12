import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsMock: Product[] = [
    <Product> {
      id: 1,
      name: 'Aluminum Autoclave (Portable Steam Sterlizer 12x12)',
      thumbnail: 'https://medicalbazzar.com/image/cache/catalog/Acco/Suction/SR-07-228x228.jpg',
      price: 7400,
      actualPrice: 6800,
      discount: 8.1,
      save: 600
    },
    <Product> {
      id: 2,
      name: 'Acco Oxygen Concentrator 5 Litre Dual Flow (With Nebulizor & SPO2)',
      thumbnail: 'https://medicalbazzar.com/image/cache/wkseller/2398/Niscomed/OC-101%20(Dual%20Flow)-228x228.jpg',
      price: 47900,
      actualPrice: 44200,
      discount: 7.72,
      save: 3700
    },
    <Product> {
      id: 1,
      name: 'Aluminum Autoclave (Portable Steam Sterlizer 12x12)',
      thumbnail: 'https://medicalbazzar.com/image/cache/catalog/Acco/Suction/SR-07-228x228.jpg',
      price: 7400,
      actualPrice: 6800,
      discount: 8.1,
      save: 600
    },
    <Product> {
      id: 2,
      name: 'Acco Oxygen Concentrator 5 Litre Dual Flow (With Nebulizor & SPO2)',
      thumbnail: 'https://medicalbazzar.com/image/cache/wkseller/2398/Niscomed/OC-101%20(Dual%20Flow)-228x228.jpg',
      price: 47900,
      actualPrice: 44200,
      discount: 7.72,
      save: 3700
    }
  ];

  constructor() { }

  getAll(): Product [] {
    return this.productsMock;
  }
}
