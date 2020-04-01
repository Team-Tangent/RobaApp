import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedImportsModule } from '../shared/shared-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemCreateDialogComponent } from './item-create-dialog/item-create-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './item.service';


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
    ReactiveFormsModule,
  ],
  providers: [
    ItemService,
  ],
  entryComponents : [
    ItemCreateDialogComponent,
  ]
})
export class ItemModule { }
