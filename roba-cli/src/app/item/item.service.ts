import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  get(itemId: number) {
    //return this.http.get<Item>('api/item/' + itemId);
    return; // needs to be fixed
  }

  search(term: string): Observable<Item[]> {
    // return this.http.get<Item[]>('/api/item/search?term=' + term);
    return; // this needs to be fixed;
  }

  save(item: Item): Observable<Item> {
    // if(item.itemId > 0){
    //   const params = new HttpParams();
    //   params.set('id', '' + item.itemId);
    //   return this.http.post<Item>('/api/items/:id', item, {
    //     params
    //   });
    // }
    // return this.http.post<Item>('/api/items', item);
    return; // fix this when ready
  }

  delete(item: Item): Observable<Item> {
    // return this.http.delete<Item>('/api/item/delete, item);
    return;
  }

}
