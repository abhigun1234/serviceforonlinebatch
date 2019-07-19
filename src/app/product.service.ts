import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetails=[
    {'id':'1','name':'addidas','description':'sports','price':'2000'}
  ,{'id':'2','name':'nike','description':'sports','price':'2000'},
  {'id':'3','name':'puma','description':'sports','price':'2000'}
  ]
  
  constructor() { }

  getProductDetails()
  {

    return this.productDetails
  }

}
