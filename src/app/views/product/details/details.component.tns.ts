import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@src/app/shared/products/products.service';
import { Product } from '@src/app/shared/products/model/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  moduleId: module.id
})
export class DetailsComponent implements OnInit {
  selectedProduct: Product;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let productId: number = +params.get('productId');
      this.productsService.get(productId).subscribe(product => this.selectedProduct = product);
    });
  }

  get sku(): string {
    return "SKU: " + this.selectedProduct.id;
  }

}
