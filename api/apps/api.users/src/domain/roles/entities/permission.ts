import { PermissionNotActionsEmpty } from '../exceptions';
import { Action, PermissionID, Scope } from '../value-object';

export class Permission {
  private _actions: Action[];
  private _scope: Scope;

  constructor(
    public readonly id: PermissionID,
    public readonly context: string,
    public readonly resource: string,
    _actions: Action[],
    _scope: Scope,
  ) {
    this._validateActions(_actions);
    this._actions = [..._actions]; // defensive copy
    this._scope = _scope;
  }

  get actions(): Action[] {
    return [...this._actions]; // defensive copy
  }

  get scope(): Scope {
    return this._scope;
  }

  hasAction(action: Action): boolean {
    return this.actions.includes(action);
  }

  updateActions(newActions: Action[]): void {
    this._validateActions(newActions);
    this._actions = [...newActions];
  }

  updateScope(newScope: Scope): void {
    this._scope = newScope;
  }

  private _validateActions(actions: Action[]): void {
    if (actions.length === 0) {
      throw new PermissionNotActionsEmpty();
    }
  }
}
