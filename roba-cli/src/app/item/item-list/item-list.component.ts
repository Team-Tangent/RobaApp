import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [
    {
      ItemId: 1,
  ItemName: 'DVD',
  CreatedOnDate: new Date(),
  Owner: 1,
  LentOut: false,
  LentTo: '',
  CanBeBorrowed: true,
  BorrowedDate: new Date(),
  ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 3,
      ItemName: 'Board Game',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Gary',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
    {
      ItemId: 2,
      ItemName: 'book',
      CreatedOnDate: new Date(),
      Owner: 1,
      LentOut: true,
      LentTo: 'Greg',
      CanBeBorrowed: true,
      BorrowedDate: new Date(),
      ReturnDate: new Date()
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
