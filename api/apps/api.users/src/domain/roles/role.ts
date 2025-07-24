import { Permission } from './entities';
import {
  PermissionNotFound,
  RoleNotEmptyName,
  RolePermissionsNotEmpty,
} from './exceptions';
import { Action, PermissionID, RoleID, Scope } from './value-object';

/**
 * Aggregate root for Role entity.
 */
export class Role {
  private _name: string;
  private _permissions: Permission[];

  constructor(
    public readonly id: RoleID,
    _name: string,
    _permissions: Permission[] = [],
  ) {
    if (!_name) {
      throw new RoleNotEmptyName();
    }

    if (_permissions.length === 0) {
      throw new RolePermissionsNotEmpty();
    }

    this._name = _name;
    this._permissions = [..._permissions]; // defensive copy
  }

  // Getters

  get name(): string {
    return this._name;
  }

  get permissions(): Permission[] {
    return [...this._permissions]; // defensive copy
  }

  // Methods

  rename(newName: string): void {
    if (!newName) {
      throw new RoleNotEmptyName();
    }
    this._name = newName;
  }

  addPermission(permission: Permission): void {
    const exists = this.hasPermission(
      permission.context,
      permission.resource,
      permission.actions, // Assuming actions is not empty
      permission.scope,
    );
    if (!exists) {
      this.permissions.push(permission);
    }
  }

  removePermission(permissionId: PermissionID): void {
    this._permissions = this._permissions.filter((p) =>
      p.id.equals(permissionId),
    );
  }

  updatePermission(updated: Permission): void {
    const index = this._permissions.findIndex((p) => p.id === updated.id);

    if (index === -1) {
      throw new PermissionNotFound(updated.id);
    }

    this._permissions[index] = updated;
  }

  hasPermission(
    context: string,
    resource: string,
    actions: Action[],
    scope: Scope,
  ): boolean {
    return this._permissions.some(
      (permission) =>
        permission.context === context &&
        permission.resource === resource &&
        actions.every((action) => permission.actions.includes(action)) &&
        permission.scope === scope,
    );
  }
}
