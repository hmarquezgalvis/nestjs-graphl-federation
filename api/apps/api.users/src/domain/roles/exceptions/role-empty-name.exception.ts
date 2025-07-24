export class RoleNotEmptyName extends Error {
  constructor() {
    super('Role name cannot be empty');
    this.name = 'ROLE_EMPTY_NAME';
  }
}
