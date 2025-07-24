import { RoleID } from '@libs/shared';
import { UserName } from '../value-objects';

export class UserAlreadyHasRole extends Error {
  constructor(roleId: RoleID, username: UserName) {
    super(`Role ${roleId.value} is already assigned to user ${username.value}`);
    this.name = 'USER_ALREADY_HAS_ROLE';
  }
}
