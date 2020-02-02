import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SharedImportsModule } from '../shared/shared-imports.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { SigninMicrosoftComponent } from './signin-microsoft/signin-microsoft.component';
import { LogoutCompleteComponent } from './logout-complete/logout-complete.component';

@NgModule({
  imports: [
    CommonModule,
    SharedImportsModule,
    AccountRoutingModule
  ],
  declarations: [
    NotAuthorizedComponent,
    LoginComponent,
    SigninMicrosoftComponent,
    LogoutCompleteComponent
  ]
})
export class AccountModule { }
