import { IdentifierNotEmpty } from '@libs/shared/domain/exceptions';

export class PermissionID {
  constructor(public readonly value: string) {
    if (!this.value) {
      throw new IdentifierNotEmpty('PermissionID');
    }
  }

  public equals(other: PermissionID): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
