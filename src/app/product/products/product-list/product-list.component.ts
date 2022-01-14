import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input('products') productList: Product[] | any;
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log("add product")
  }

}
