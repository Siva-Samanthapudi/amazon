import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { ProductsComponent } from './product/products/products.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},  
  {path:'home', component:HomeComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'profile', loadChildren:  () => import(`./profile/profile.module`).then(m => m.ProfileModule)},
  {path:'settings', loadChildren:  () => import(`./settings/settings.module`).then(m => m.SettingsModule)},
  {path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
