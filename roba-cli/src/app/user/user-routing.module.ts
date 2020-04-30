import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from '../account/authenticated.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
  path: 'detail',
  pathMatch: 'full',
  component: UserDetailComponent,
  canActivate: [AuthenticatedGuard]
},
{
  path: 'profile',
  pathMatch: 'full',
  component: UserProfileComponent,
  canActivate: [AuthenticatedGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
