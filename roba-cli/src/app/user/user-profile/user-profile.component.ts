import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { UserSummary } from 'src/app/account/account.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: UserSummary;


  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.LoadUser();
  }

  LoadUser() 
    {
    this.user = this.accountService.user;
    }
      
}
      
