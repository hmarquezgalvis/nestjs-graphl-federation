export class IdentifierNotEmpty extends Error {
  constructor(identifierName: string = 'ID') {
    super(`${identifierName} cannot be empty`);
    this.name = 'IDENTIFIER_NOT_EMPTY';
  }
}
