import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ItemCreateDialogComponent } from '../item-create-dialog/item-create-dialog.component';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
<<<<<<<<< Temporary merge branch 1
  
  items$: Observable<Item[]>;
=========
  items: Item[] = [
    {
      itemId: 1,
      itemName: 'DVD',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: false,
      lentTo: '',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    },
    {
      itemId: 2,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      itemId: 3,
      itemName: 'Board Game',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Gary',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    },
    {
      itemId: 4,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      itemId: 5,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    },
    {
      itemId: 6,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      // tslint:disable-next-line: max-line-length
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      itemId: 7,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    },
    {
      itemId: 8,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      itemId: 9,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    },
    {
      itemId: 10,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      itemId: 11,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    },
    {
      itemId: 12,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      itemId: 13,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: false,
      lentTo: '',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    },
    {
      itemId: 14,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: false,
      lentTo: '',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      itemId: 15,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: true,
      lentTo: 'Greg',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    },
    {
      itemId: 16,
      itemName: 'book',
      createdOnDate: '3/11/2020',
      ownerId: 1,
      lentOut: false,
      lentTo: '',
      canBeBorrowed: true,
      borrowedDate: '3/11/2020',
      returnDate: '3/11/2020',
      image: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
  ];


>>>>>>>>> Temporary merge branch 2

  constructor(
    private route: Router,
    public dialog: MatDialog,
    public itemService: ItemService,
  ) { }

  ngOnInit() {
    this.search();
  }

  search(){
    this.items$ = this.itemService.search('');
  }

  addItem(){
    const dialogRef = this.dialog.open(ItemCreateDialogComponent, {
      width: '300px',
      height: '400px',
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result){
        return;
      }
      return this.itemService.save(result).subscribe( _ => this.search()); 
      //_ means not using it for the result ^
    });
  }

<<<<<<<<< Temporary merge branch 1
  deleteItem(item: Item){
    this.itemService.delete(item).subscribe((bool: boolean) => {
      this.search();
    })
  }

  lendOut(){
    alert("You're lending your stuff out!");
=========
  deleteItem(id) {
    alert('Item will be deleted, functionality coming soon', id);
  }

  openDetail(item) {
    if (item.itemId) {
      this.route.navigate([`./items/${item.itemId}`]);
    }
  }

}
