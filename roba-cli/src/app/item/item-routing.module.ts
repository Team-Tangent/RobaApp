import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { AuthenticatedGuard } from '../account/authenticated.guard';
import { ItemListComponent } from './item-list/item-list.component';


<<<<<<< HEAD

const routes: Routes = [];
=======
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ItemListComponent,
    canActivate: [AuthenticatedGuard]
  },
];
>>>>>>> RyanDev1

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class ItemRoutingModule { }
