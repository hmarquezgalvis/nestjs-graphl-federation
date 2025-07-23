import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.USERS_PORT!),
  graphql: {
    debug: process.env.USERS_GRAPHQL_DEBUG === 'true',
    playground: process.env.USERS_GRAPHQL_PLAYGROUND === 'true',
  },
  throttle: {
    ttl: parseInt(process.env.USERS_THROTTLE_TTL!) || 60, // 1 minute
    limit: parseInt(process.env.USERS_THROTTLE_LIMIT!) || 100, // 100 request ttl (per minute)
  },
}));
