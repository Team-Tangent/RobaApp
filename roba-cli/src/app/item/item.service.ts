import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {}

  get(itemId: number): Observable<Item> {
    return this.http.get<Item>('api/item/' + itemId);
    //return of(this.items.find((item) => item.itemId === itemId)); // needs to be fixed
  }

  search(term: string): Observable<Item[]> {
    return this.http.get<Item[]>('/api/item/search?term=' + term);
    //return of(this.items); // this needs to be fixed;
  }

  save(item: Item): Observable<Item> {
    if(item.itemId > 0){
      const params = new HttpParams();
      params.set('id', '' + item.itemId);
      return this.http.post<Item>('/api/items/:id', item, {
        params
      });
    }
    return this.http.post<Item>('/api/items', item);
    // if(item.itemId === 0){
    //   item.itemId = Math.max(...this.items.map((item) => item.itemId)) + 1;
    //   this.items.push(item)
    // } else {
    //   this.items = this.items.map(x => x.itemId === item.itemId ? item : x);
    // }
    // return of(item); // fix this when ready
  }

  delete(item: Item): Observable<boolean> {
    return this.http.delete<Item>('/api/item/delete', item);
    // this.items = this.items.filter((x) => x.itemId !== item.itemId);
    // return of(true);
  }

  // items: Item[] = [
  //   {
  //   itemId: 1,
  //   itemName: 'DVD',
  //   createdOnDate: '3/11/2020',
  //   ownerId: '1',
  //   lentOut: false,
  //   lentTo: '',
  //   canBeBorrowed: true,
  //   borrowedDate: '3/11/2020',
  //   returnDate: '3/11/2020',
  //   imageFileContent: "https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  //   imageFileType: "test"
  //     },
  //     {
  //     itemId: 2,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     imageFileType: "test"
  //   },
  //   {
  //     itemId: 3,
  //     itemName: 'Board Game',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Gary',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 4,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 5,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 6,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 7,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 8,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 9,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 10,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 11,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 12,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 13,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: false,
  //     lentTo: '',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1530328411047-7063dbd29029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 14,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: false,
  //     lentTo: '',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 15,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: true,
  //     lentTo: 'Greg',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
  //     imageFileType: "test",
  //   },
  //   {
  //     itemId: 16,
  //     itemName: 'book',
  //     createdOnDate: '3/11/2020',
  //     ownerId: '1',
  //     lentOut: false,
  //     lentTo: '',
  //     canBeBorrowed: true,
  //     borrowedDate: '3/11/2020',
  //     returnDate: '3/11/2020',
  //     imageFileContent: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //     imageFileType: "test",
  //   },
  // ];

}
