import { User } from '../user';
import { UserID } from '../value-objects';

export abstract class UserRepository {
  abstract save(newUser: User): void;

  abstract findById(id: UserID): User | null;

  abstract findAll(): User[];

  abstract deleteById(id: UserID): void;
}
