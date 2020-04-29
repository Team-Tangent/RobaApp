export type ItemType = 'VideoGame' | 'Book' | 'Movie';

export interface Item {
  itemId: number;
  itemName: string;
  createdOnDate: string;
  userId: string;
  lentOut: boolean;
  lentTo: string;
  canBeBorrowed: boolean;
  borrowedDate: string;
  returnDate: string;
  imageFileContent: string;
  imageFileType: string;
}
