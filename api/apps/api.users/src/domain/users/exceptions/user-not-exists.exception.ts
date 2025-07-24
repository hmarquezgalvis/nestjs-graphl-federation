import { UserID } from '@libs/shared/domain/value-objects';

export class UserNotExists extends Error {
  constructor(userId: UserID) {
    super(`User with ID ${userId.value} not found`);
    this.name = 'USER_NOT_EXISTS';
  }
}
