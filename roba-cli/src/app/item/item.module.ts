import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedImportsModule } from '../shared/shared-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemCreateDialogComponent } from './item-create-dialog/item-create-dialog.component';


@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemCreateDialogComponent,
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedImportsModule,
    HttpClientModule,
  ],
  entryComponents : [
    ItemCreateDialogComponent,
  ]
})
export class ItemModule { }
