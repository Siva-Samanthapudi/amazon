import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //@Input('product') selectedProduct?: Product;
  selectedProduct?:Product;
  @Input('title') title?: string;
  @Input('closeBtnName') closeBtnName?: string;
  @Input('id') id?: number | any;

  //@Input ('initialState') initialState: any;
  constructor(private productService: ProductService) {
    console.log("product details initated");
    if(this.selectedProduct?.id)
     this.productService.getProduct(this.selectedProduct.id);
  }
  
  ngOnInit(): void {
    console.log(this.selectedProduct);
  }

}
