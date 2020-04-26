import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "@src/app/shared/products/products.service";
import { Product } from "@src/app/shared/products/model/product";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  moduleId: module.id,
})
export class DetailsComponent implements OnInit {
  selectedProduct: Product;
  quantity: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: RouterExtensions
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let productId: number = +params.get("productId");
      this.productsService
        .get(productId)
        .subscribe((product) => (this.selectedProduct = product));
    });
  }

  addItem() {
    this.quantity++;
  }

  removeItem() {
    this.quantity--;
  }

  addToCart() {
    this.router.navigate(["cart"]);
  }

  get sku(): string {
    return "SKU: " + this.selectedProduct.id;
  }
}
