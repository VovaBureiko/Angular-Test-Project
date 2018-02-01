import { Component } from '@angular/core';
import { IProduct } from '../../api/products/products';
import { OnInit } from '@angular/core';
import { ProductService } from '../../api/products/product.service';

@Component({
    templateUrl : './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(product => {
            this.products = product,
            this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error);
        this.filteredProducts = this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
