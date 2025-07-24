export * from './shared.module';
export * from './shared.service';

// value objects
export { RoleID } from './domain/value-objects/role-id';

export const getTestMessage = (): string => {
  return 'This is a test message from shared module';
};
