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
import { ItemLendOutDialogComponent } from './item-lend-out-dialog/item-lend-out-dialog.component';
import { JwtInterceptor } from '../account/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemCreateDialogComponent,
    ItemLendOutDialogComponent,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  entryComponents : [
    ItemCreateDialogComponent,
    ItemLendOutDialogComponent,
  ]
})
export class ItemModule { }
