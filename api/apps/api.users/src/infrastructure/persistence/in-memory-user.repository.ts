import { User } from '../../domain/users/user';
import { CompanyContext, UserName } from '../../domain/users/value-objects';
import { UserRepository } from '../../domain/users/interfaces/user.repository';
import { RoleID } from '@libs/shared';
import { UserID } from '@libs/shared/domain/value-objects';

export class InMemoryUserRepository extends UserRepository {
  private users: User[] = [
    new User(
      new UserID('0000-0000-0000-0001'),
      new UserName('john_doe'),
      'john.doe@example.com',
      new CompanyContext('C0001', 'D0001', 'B0001'),
      [new RoleID('R0001')],
    ),
    new User(
      new UserID('0000-0000-0000-0002'),
      new UserName('jane_doe'),
      'jane.doe@example.com',
      new CompanyContext('C0002', 'D0002', 'B0002'),
      [new RoleID('R0002')],
    ),
  ];

  save(newUser: User): void {
    const existingIndex = this.users.findIndex((user) =>
      user.id.equals(newUser.id),
    );

    if (existingIndex >= 0) {
      this.users[existingIndex] = newUser;
    } else {
      this.users.push(newUser);
    }
  }

  findById(id: UserID): User | null {
    return this.users.find((user) => user.id.equals(id)) || null;
  }

  findAll(): User[] {
    return [...this.users]; // return a copy to prevent external mutation
  }

  deleteById(id: UserID): void {
    this.users = this.users.filter((user) => !user.id.equals(id));
  }
}
