import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { AuthenticatedGuard } from '../account/authenticated.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ItemComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
