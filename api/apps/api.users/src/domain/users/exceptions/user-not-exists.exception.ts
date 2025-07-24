import { UserID } from 'apps/api.users/src/domain/users/value-objects';

export class UserNotExists extends Error {
  constructor(userId: UserID) {
    super(`User with ID ${userId.value} not found`);
    this.name = 'USER_NOT_EXISTS';
  }
}
