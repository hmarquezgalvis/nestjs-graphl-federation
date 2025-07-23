import { NestFactory } from '@nestjs/core';
import { ApiUsersModule } from './presentation/api.users.module';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(ApiUsersModule);
  const config = app.get(ConfigService);

  app.use(compression());

  await app.listen(config.get<number>('app.port')!);
}

void bootstrap();
