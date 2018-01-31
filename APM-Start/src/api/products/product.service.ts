import { Injectable } from '@angular/core';
import { IProduct } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProductService {
    private _productUrl = './products/products.json';
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
    constructor(private _http: HttpClient) {}
}

