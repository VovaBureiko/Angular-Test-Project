import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { PrdouctsGuardService } from '../products/prdoucts-guard.service';
import { ProductDetailComponent } from '../products/product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
       canActivate: [PrdouctsGuardService],
       component: ProductDetailComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
