import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ItemCreateDialogComponent } from '../item-create-dialog/item-create-dialog.component';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { ItemLendOutDialogComponent } from '../item-lend-out-dialog/item-lend-out-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {


  items$: Observable<Item[]>;

  constructor(
    private route: Router,
    public dialog: MatDialog,
    public itemService: ItemService,
  ) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.items$ = this.itemService.search('');
  }

  addItem() {
    const dialogRef = this.dialog.open(ItemCreateDialogComponent, {
      width: '300px',
      height: '400px',
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      return this.itemService.save(result).subscribe(_ => this.search());
      //_ means not using it for the result ^
    });
  }

  deleteItem(item: Item) {
    this.itemService.delete(item).subscribe((bool: boolean) => {
      this.search();
    })
  }

  lendOut() {
    const dialogRef = this.dialog.open(ItemLendOutDialogComponent, {
      width: '300px',
      height: '300px',
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      return this.itemService.save(result).subscribe(_ => this.search());
      //_ means not using it for the result ^
    });
  }
  openDetail(item) {
    if (item.itemId) {
      this.route.navigate([`./items/${item.itemId}`]);
    }
  }

  itemReturned(item) {
    if(item.itemId){
      item.lentOut = false;
      item.lentTo = '';
    }
    return this.itemService.save(item.itemId);
  }

}
