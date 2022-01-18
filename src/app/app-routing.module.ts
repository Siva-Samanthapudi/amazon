import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { NewsComponent } from './news/news/news.component';
import { ProductsComponent } from './product/products/products.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'contact', component: ContactUsComponent }
    ]
  },
  { path: 'profile', loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule) },
  { path: 'settings', loadChildren: () => import(`./settings/settings.module`).then(m => m.SettingsModule) },
  { path: 'products', component: ProductsComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
