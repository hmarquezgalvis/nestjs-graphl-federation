import { env } from 'node:process';

export interface IEnvironmentConfig {
  port: number;
}

export class EnvironmentConfig implements IEnvironmentConfig {
  port: number;

  constructor() {
    this.port = parseInt(env.USERS_PORT!) || 8010;
  }
}

export const environmentConfig = new EnvironmentConfig();
