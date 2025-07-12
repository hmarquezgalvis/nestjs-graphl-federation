export * from './shared.module';
export * from './shared.service';

export const getTestMessage = (): string => {
  return 'This is a test message from shared module';
};
