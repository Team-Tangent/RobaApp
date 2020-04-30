import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedImportsModule } from '../shared/shared-imports.module';


@NgModule({
  declarations: [UserDetailComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedImportsModule
  ]
})
export class UserModule { }
