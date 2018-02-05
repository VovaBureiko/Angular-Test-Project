import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../api/products/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../api/products/product.service';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  private id: number;
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {}

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProducts()
    .subscribe(data => {
        this.product = data.find(productId => productId.productId === this.id);
    });
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
