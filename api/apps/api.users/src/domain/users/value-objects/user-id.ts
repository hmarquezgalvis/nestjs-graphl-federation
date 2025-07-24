import { IdentifierNotEmpty } from '@libs/shared/domain/exceptions';

export class UserID {
  constructor(public readonly value: string) {
    if (!this.value) {
      throw new IdentifierNotEmpty('UserID');
    }
  }

  equals(other: UserID): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
