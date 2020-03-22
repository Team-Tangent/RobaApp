import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ActivatedRoute } from '@angular/router';
//import { ItemService } from './item.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemId: number;
  item: Item;
  //detailForm: FormGroup;


  constructor(
    //private fb: FormBuilder,
    //private itemService: ItemService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.itemId = +this.route.snapshot.params.id;
    // this.itemService.get(this.itemId)
    //   .subscribe(item => {
    //     this.item = item;
    //   })
  }

}
