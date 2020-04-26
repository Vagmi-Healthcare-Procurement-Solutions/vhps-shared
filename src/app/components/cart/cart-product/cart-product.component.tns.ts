import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@src/app/shared/products/model/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
  moduleId: module.id
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
