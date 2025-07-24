import { UserNameNotEmpty } from '../exceptions';

export class UserName {
  constructor(public readonly value: string) {
    if (!this.value) {
      throw new UserNameNotEmpty();
    }
  }

  equals(other: UserName): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
