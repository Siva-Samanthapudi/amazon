import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductsComponent } from './product/products/products.component';
import { ViewProductComponent } from './product/view-product/view-product.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},  
  {path:'home', component:HomeComponent},
  {path:'profile', loadChildren:  () => import(`./profile/profile.module`).then(m => m.ProfileModule)},
  {path:'settings', loadChildren:  () => import(`./settings/settings.module`).then(m => m.SettingsModule)},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
