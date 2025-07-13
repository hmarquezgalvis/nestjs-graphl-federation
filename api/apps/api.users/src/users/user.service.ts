import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: '1',
      username: 'john_doe',
      password: 'password123',
      email: 'john@acme.com',
    },
    {
      id: '2',
      username: 'jane_smith',
      password: 'password456',
      email: 'jane@acme.com',
    },
  ];

  constructor() {}

  getList(): User[] {
    return this.users;
  }

  getById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
