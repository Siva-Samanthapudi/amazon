import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const productRoutes: Routes = [
 {path:'', component:ProductsComponent, children:[
    {path:'add-product',component:AddProductComponent},
    {path:':id/details',component:ProductDetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
