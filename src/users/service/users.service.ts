import { Injectable } from '@nestjs/common';

type User = {
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  gender: 'Male' | 'Female';
};

@Injectable()
export class UsersService {
  mockData: User[] = [
    {
      name: 'Ketan',
      email: 'ketan@gmail.com',
      phone: '9978989',
      isAdmin: false,
      gender: 'Male',
    },
    {
      name: 'Krishna',
      email: 'krishna@gmail.com',
      phone: '898969',
      isAdmin: true,
      gender: 'Male',
    },
  ];

  getAllUsers(): User[] {
    return this.mockData;
  }
}
