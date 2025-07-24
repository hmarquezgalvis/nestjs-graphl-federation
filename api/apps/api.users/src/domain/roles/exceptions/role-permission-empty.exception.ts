export class RolePermissionsNotEmpty extends Error {
  constructor() {
    super('Role must have at least one permission');
    this.name = 'ROLE_PERMISSIONS_NOT_EMPTY';
  }
}
