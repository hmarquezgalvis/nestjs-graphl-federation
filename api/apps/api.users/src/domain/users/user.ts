import { RoleID } from '@libs/shared/domain/value-objects';
import { CompanyContext, UserID, UserName } from './value-objects';
import { UserAlreadyHasRole } from './exceptions';

/**
 * Aggregate root for User entity.
 */
export class User {
  private _username: UserName;
  private _email: string;
  private _context: CompanyContext;
  private _roleIds: RoleID[];

  constructor(
    public readonly id: UserID,
    _username: UserName,
    _email: string,
    _context: CompanyContext,
    _roleIds: RoleID[],
  ) {
    this._username = _username;
    this._email = _email;
    this._context = _context;
    this._roleIds = [..._roleIds]; // defensive copy
  }

  // Getters

  get username(): UserName {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get context(): CompanyContext {
    return this._context;
  }

  get roleIds(): RoleID[] {
    return [...this._roleIds]; // defensive copy
  }

  // Methods

  updateUserName(newUsername: UserName): void {
    this._username = newUsername;
  }

  updateEmail(newEmail: string): void {
    this._email = newEmail;
  }

  updateContext(newContext: CompanyContext): void {
    this._context = newContext;
  }

  assignRole(roleId: RoleID): void {
    if (this.roleIds.some((r) => r.equals(roleId))) {
      throw new UserAlreadyHasRole(roleId, this._username);
    }

    this._roleIds.push(roleId);
  }

  removeRole(roleId: RoleID): void {
    this._roleIds = this._roleIds.filter((id) => !id.equals(roleId));
  }
}
