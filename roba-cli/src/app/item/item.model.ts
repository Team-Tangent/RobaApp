export type ItemType = 'VideoGame' | 'Book' | 'Movie';

export interface Item {
  ItemId: number;
  ItemName: number;
  CreatedOnDate: string;
  Owner: number;
  LentOut: boolean;
  CanBeBorrowed: boolean;
  BorrowedDate: string;
  ReturnDate: string;
}
