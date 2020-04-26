import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@src/app/shared/products/model/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
  moduleId: module.id
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;
  @Output() delete: EventEmitter<Product>;

  constructor() {
    this.delete = new EventEmitter();
  }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.product);
  }

}
