import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './account/authenticated.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandComponent } from './land/land.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'items',
    pathMatch: 'full'
  },
  {
    path: 'l',
    component: LandComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
