import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LandComponent } from './land/land.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-dashboard', pathMatch: 'full', },
  { path: 'land', component: LandComponent, },
=======
import { AuthenticatedGuard } from './account/authenticated.guard';
import { ItemModule } from './item/item.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
>>>>>>> RyanDev1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
