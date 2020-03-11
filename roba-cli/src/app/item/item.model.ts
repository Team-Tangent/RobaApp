export type ItemType = 'VideoGame' | 'Book' | 'Movie';

export interface Item {
  ItemId: number;
  ItemName: string;
  CreatedOnDate: Date;
  Owner: number;
  LentOut: boolean;
  LentTo: string;
  CanBeBorrowed: boolean;
  BorrowedDate: Date;
  ReturnDate: Date;
  image: string;
}
