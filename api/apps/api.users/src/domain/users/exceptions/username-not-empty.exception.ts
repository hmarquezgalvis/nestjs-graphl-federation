export class UserNameNotEmpty extends Error {
  constructor() {
    super('Username cannot be empty');
    this.name = 'USERNAME_NOT_EMPTY';
  }
}
