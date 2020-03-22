import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Item } from '../item.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-create-dialog',
  templateUrl: './item-create-dialog.component.html',
  styleUrls: ['./item-create-dialog.component.scss']
})
export class ItemCreateDialogComponent implements OnInit {
  detailForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item | null) {
      this.detailForm = this.fb.group({
        itemName: ['',Validators.required],
        image: [''],
        itemType: ['VideoGame'],
      });
      if(this.data) {
        this.detailForm.patchValue(this.data);
      }
    }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if(!this.detailForm.valid){
      return;
    }
    //Todo gather form data
    const item = {...this.data, ...this.detailForm.value};
    this.dialogRef.close(item);
  }

}
