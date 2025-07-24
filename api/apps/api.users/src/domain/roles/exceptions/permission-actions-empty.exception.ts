export class PermissionNotActionsEmpty extends Error {
  constructor() {
    super('Permission actions cannot be empty');
    this.name = 'PERMISSIONS_NOT_ACTIONS_EMPTY';
  }
}
