import { IdentifierNotEmpty } from '@libs/shared/domain/exceptions';

export class EmployeeID {
  constructor(public readonly value: string) {
    if (!this.value) {
      throw new IdentifierNotEmpty('EmployeeID');
    }
  }

  equals(other: EmployeeID): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
