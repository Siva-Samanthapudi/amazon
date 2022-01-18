import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from 'src/app/product/product-details/product-details.component';
import { Product } from 'src/app/product/product.model';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input('productItem') productItem : Product | any;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService, 
              private productService: ProductService, 
              private route: Router) {}

  ngOnInit(): void {
  }

  /*
  onSelected(productItemSelected: Product){
    console.log("selected ite:", productItemSelected)
    const initialState: ModalOptions = {
      initialState: {
        title: "View Product",
        editMode: false,
        id: this.productItem.id,
        product: productItemSelected
      }
    };
    this.bsModalRef = this.modalService.show(ProductDetailsComponent, initialState);
    this.bsModalRef.content.closeBtnName = "Close";
  }
*/

onSelected(productItemSelected : Product){
  this.route.navigate([productItemSelected.id,'details']);
}

}
