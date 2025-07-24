import { UserID } from '@libs/shared/domain/value-objects';

export class UserAlreadyExists extends Error {
  constructor(userId: UserID) {
    super(`User with identifier '${userId.value}' already exists`);
    this.name = 'USER_ALREADY_EXISTS';
  }
}
