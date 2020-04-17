import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@src/app/shared/products/products.service';
import { Product } from '@src/app/shared/products/model/product';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  moduleId: module.id
})
export class ProductsComponent implements OnInit {
  productsList: Product[];

  constructor(private router: RouterExtensions, private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(productsList => this.productsList = productsList);
  }

  goToDetails(product: Product): any {
    this.router.navigate(['details', product.id]);
  }

}
