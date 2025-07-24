import { PermissionID } from '../value-object';

export class PermissionNotFound extends Error {
  constructor(permissionId: PermissionID) {
    super(`Permission with id ${permissionId.value} not found`);
    this.name = 'PERMISSION_NOT_FOUND';
  }
}
