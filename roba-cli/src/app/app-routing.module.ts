import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemModule } from './Item/item.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
