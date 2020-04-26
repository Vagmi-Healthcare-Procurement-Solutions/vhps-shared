import { Component, OnInit } from '@angular/core';
import { Product } from '@src/app/shared/products/model/product';
import { ProductsService } from '@src/app/shared/products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  moduleId: module.id
})
export class CartComponent implements OnInit {
  products: Product [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(products => this.products = products);
  }

}
