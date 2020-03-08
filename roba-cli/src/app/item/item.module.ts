import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedImportsModule } from '../shared/shared-imports.module';


@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedImportsModule
  ]
})
export class ItemModule { }
