import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { ApiUsersModule } from './api.users.module';
import { environmentConfig } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(ApiUsersModule);
  await app.listen(environmentConfig.port);
}

void bootstrap();
