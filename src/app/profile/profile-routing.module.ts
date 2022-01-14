import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';


const profileRoutes: Routes = [
  {path:'user-profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
