import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  get(itemId: number): Observable<Item> {
    return this.http.get<Item>('api/items/' + itemId);
    //return of(this.items.find((item) => item.itemId === itemId)); // needs to be fixed
  }

  search(): Observable<Item[]> { 
    return this.http.get<Item[]>('/api/items/user/current');
    //return of(this.items); // this needs to be fixed;
  }

  save(item: Item): Observable<Item> {
    if(item.itemId > 0){
      return this.http.put<Item>('/api/items/' + item.itemId, item);
    }
    return this.http.post<Item>('/api/items', item);
  }

  delete(item: Item): Observable<boolean> {
    return this.http.delete<boolean>('/api/items/' + item.itemId);
  }

}
