import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ItemService } from './item.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemId: number;
  itemName: string;
  image: string;
  item: Item;
  detailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    //private itemService: ItemService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { 
    this.createForm();
  }

  createForm() {
    this.detailForm = this.fb.group({
      itemName: ['', Validators.required],
      image: [''],
      itemType: [''],
    })
  }

  ngOnInit() {
    this.itemId = +this.route.snapshot.params.id;
    // this.itemService.get(this.itemId)
    //   .subscribe(item => {
    //     this.item = item;
    //     this.detailForm.patchValue(item);
    //   })
  }

  save() {
    alert("this will work!");
  }
  // save() {
  //   if(!this.detailForm.valid) { return; }
  //   const item = { ...this.item, ...this.detailForm.value };
  //   this.itemService.save(item)
  //     .subscribe(result => {
  //       if(!result) {
  //         this.snackBar.open("Error Saving Item", 'Exit');
  //       }
  //       this.snackBar.open('Item was saved', 'OK');
  //     })
  // }

}
