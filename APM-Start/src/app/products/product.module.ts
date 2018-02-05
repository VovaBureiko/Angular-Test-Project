import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { PrdouctsGuardService } from './prdoucts-guard.service';
import { ProductService } from '../../api/products/product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from '../routing/product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    PrdouctsGuardService
  ]
})
export class ProductModule { }
