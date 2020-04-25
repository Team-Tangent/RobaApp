import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Item } from '../item.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-lend-out-dialog',
  templateUrl: './item-lend-out-dialog.component.html',
  styleUrls: ['./item-lend-out-dialog.component.scss']
})
export class ItemLendOutDialogComponent implements OnInit {
  detailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemLendOutDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Item | null) {
      this.detailForm = this.fb.group({
        lendTo: ['', Validators.required],
      })
      if(this.data){
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
    //gather form data
    const item = {...this.data, ...this.detailForm.value, lentOut: true};
    this.dialogRef.close(item);
  }
  
}
