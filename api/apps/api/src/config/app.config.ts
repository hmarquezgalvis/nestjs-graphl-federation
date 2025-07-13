import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT!) || 8000,
  services: {
    users: process.env.USERS_GRAPHQL_URL!,
    employees: process.env.EMPLOYEES_GRAPHQL_URL!,
  },
}));
