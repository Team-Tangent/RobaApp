export type InteractionMethod = 'phone' | 'email';

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}
