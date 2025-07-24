import { UserID } from '@libs/shared/domain/value-objects';
import { EmployeeID } from './value-objects';
import { EmployeeAlreadyHasUser } from './exceptions';

/**
 * Aggregate root for employee domain
 */
export class Employee {
  private _name: string;
  private _position: string;
  private _department: string;
  private _userId?: UserID;

  constructor(
    public readonly id: EmployeeID,
    _name: string,
    _position: string,
    _department: string,
    _userId?: UserID,
  ) {
    this._name = _name;
    this._position = _position;
    this._department = _department;

    if (_userId) {
      this._userId = _userId;
    }
  }

  // Getters

  get name(): string {
    return this._name;
  }

  get position(): string {
    return this._position;
  }

  get department(): string {
    return this._department;
  }

  get userId(): UserID | undefined {
    return this._userId;
  }

  // Methods

  changeName(newName: string): void {
    this._name = newName;
  }

  changePosition(newPosition: string): void {
    this._position = newPosition;
  }

  changeDepartment(newDepartment: string): void {
    this._department = newDepartment;
  }

  assignUser(userId: UserID): void {
    if (this._userId) {
      throw new EmployeeAlreadyHasUser(userId);
    }
    this._userId = userId;
  }

  removeUser(): void {
    this._userId = undefined;
  }
}
