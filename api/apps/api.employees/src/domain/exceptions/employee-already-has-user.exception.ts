import { UserID } from '@libs/shared/domain/value-objects';

export class EmployeeAlreadyHasUser extends Error {
  constructor(userId: UserID) {
    super(`Employee already has an associated user: ${userId.value}`);
  }
}
