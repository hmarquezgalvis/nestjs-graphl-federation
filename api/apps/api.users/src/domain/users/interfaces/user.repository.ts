import { UserID } from '@libs/shared/domain/value-objects';
import { User } from '../user';

export abstract class UserRepository {
  abstract save(newUser: User): void;

  abstract findById(id: UserID): User | null;

  abstract findAll(): User[];

  abstract deleteById(id: UserID): void;
}
