import { Component, OnInit } from '@angular/core';
import { Product } from '@src/app/shared/products/model/product';
import { ProductsService } from '@src/app/shared/products/products.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  moduleId: module.id
})
export class CartComponent implements OnInit {
  products: Product [];

  constructor(private router: RouterExtensions, private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(products => this.products = products);
  }

  onDelete(product: Product): void {
    this.products = this.products.filter(iteratorProduct => iteratorProduct.id !== product.id);
  }

  isCartFull(): boolean {
    return !!this.products && !!this.products.length;
  }

  continueShopping() {
    this.router.navigate(["home"]);
  }

}
