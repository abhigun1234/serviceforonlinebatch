import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails
  constructor(private products:ProductService) { }

  ngOnInit() {
  }

  getProduct()
  {
    this.productDetails=this.products.getProductDetails()
  }

}
