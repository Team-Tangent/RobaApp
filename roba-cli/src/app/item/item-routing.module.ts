import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { AuthenticatedGuard } from '../account/authenticated.guard';
import { ItemListComponent } from './item-list/item-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ItemListComponent,
    canActivate: [AuthenticatedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class ItemRoutingModule { }
