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
  itemName: string;
  image: string;
  item: Item;

  constructor(
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
