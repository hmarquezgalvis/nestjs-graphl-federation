import { env } from 'node:process';

export interface IEnvironmentConfig {
  port: number;
  AuthServiceUrl: string;
}

export class EnvironmentConfig implements IEnvironmentConfig {
  port: number;
  AuthServiceUrl: string;

  constructor() {
    this.port = parseInt(env.GATEWAY_PORT!) || 8000;
    this.AuthServiceUrl = env.USERS_GRAPHQL_URL!;
  }
}

export const environmentConfig = new EnvironmentConfig();
