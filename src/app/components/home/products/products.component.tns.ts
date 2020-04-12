import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@src/app/shared/products/products.service';
import { Product } from '@src/app/shared/products/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  moduleId: module.id
})
export class ProductsComponent implements OnInit {
  productsList: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsList = this.productsService.getAll();
  }

}
