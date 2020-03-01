import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemModule } from './Item/item.module';
import { LandComponent } from './land/land.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-dashboard',
    pathMatch: 'full',
    children: [
      {
        path: 'land',
        component: LandComponent,
      },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
