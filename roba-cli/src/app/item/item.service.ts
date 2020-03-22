import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Item[]> {
    // return this.http.get<Item[]>('/api/item/search?term=' + term);
    return; // this needs to be fixed;
  }

  save(item: Item): Observable<Item> {
    // return this.http.post<Item>('/api/item/save, item);
    return; // fix this when ready
  }

  delete(item: Item): Observable<Item> {
    return;
  }

  // get(itemId: number) {
  //   return this.http.get<Item>('api/item/' + itemId);
  // }
}
