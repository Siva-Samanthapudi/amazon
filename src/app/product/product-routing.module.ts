import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const productRoutes: Routes = [
 {path:'', component:ProductsComponent, children:[
    {path:'add-product',component:AddProductComponent},
    {path:'view-product',component:ViewProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
