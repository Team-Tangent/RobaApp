import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-create-dialog',
  templateUrl: './item-create-dialog.component.html',
  styleUrls: ['./item-create-dialog.component.scss']
})
export class ItemCreateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ItemCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item | null
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    //Todo gather form data
    const item = {...this.data};
    this.dialogRef.close(item);
  }

}
