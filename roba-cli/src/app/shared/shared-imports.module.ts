import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

export const SHARED_MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  FlexLayoutModule,
  MatProgressSpinnerModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...SHARED_MATERIAL_MODULES
  ],
  exports: [
    ...SHARED_MATERIAL_MODULES
  ],
})
export class SharedImportsModule { }
