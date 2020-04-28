import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectShowSideNav, toggleSidenav, LayoutState, closeSidenav } from '../store/layout.store';
import { AccountService } from '../account/account.service';



@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    showSideNav$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, 
            private store: Store<LayoutState>,
            private accountService: AccountService) {
    this.showSideNav$ = this.store.pipe(select(selectShowSideNav));
  }

  login() {
    this.accountService.login();
  }

  logout() {
    this.accountService.logout();
  }

  sideNavToggle() {
    this.store.dispatch(toggleSidenav());
  }

  closeSideNav() {
    this.store.dispatch(closeSidenav());
  }

}
