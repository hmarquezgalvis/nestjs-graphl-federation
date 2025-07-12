import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { environmentConfig } from './config/environment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environmentConfig.port);
}

void bootstrap();
