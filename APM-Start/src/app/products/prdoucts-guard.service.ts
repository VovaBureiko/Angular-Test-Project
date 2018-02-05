import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';

@Injectable()
export class PrdouctsGuardService implements CanActivate {
  // tslint:disable-next-line:no-trailing-whitespace
  
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
