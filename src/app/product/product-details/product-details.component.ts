import { Component, DoCheck, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, DoCheck {
  selectedProduct: Product;
  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
    this.selectedProduct = this.updateProductSelected();
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.selectedProduct = this.updateProductSelected();
  }

  updateProductSelected() {
    let id: number | any = this.activateRoute.snapshot.paramMap.get('id');
    return this.selectedProduct = this.productService.getProduct(id);
  }

}

