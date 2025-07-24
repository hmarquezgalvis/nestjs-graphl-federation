import { IdentifierNotEmpty } from '@libs/shared/domain/exceptions';

export class RoleID {
  constructor(public readonly value: string) {
    if (!this.value) {
      throw new IdentifierNotEmpty('RoleID');
    }
  }

  equals(other: RoleID): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
