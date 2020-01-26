import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Item[]> {
    // return this.http.get<Item[]>();
    return; // this needs to be fixed;
  }

  save(item: Item): Observable<Item> {
    return;
  }
}
