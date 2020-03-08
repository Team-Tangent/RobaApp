import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SharedImportsModule } from './shared/shared-imports.module';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './account/login/login.component';
import { LogoutCompleteComponent } from './account/logout-complete/logout-complete.component';
import { NotAuthorizedComponent } from './account/not-authorized/not-authorized.component';
import { SigninMicrosoftComponent } from './account/signin-microsoft/signin-microsoft.component';
import { LandComponent } from './land/land.component';
import { SlideshowModule } from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    AppNavComponent,
    ItemComponent,
    LoginComponent,
    LogoutCompleteComponent,
    NotAuthorizedComponent,
    SigninMicrosoftComponent,
    LandComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    SharedImportsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
