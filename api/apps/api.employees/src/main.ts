import { ConfigService } from '@nestjs/config';

import { NestFactory } from '@nestjs/core';
import { ApiEmployeesModule } from './api.employees.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiEmployeesModule);
  const config = app.get(ConfigService);

  await app.listen(config.get<number>('app.port')!);
}
void bootstrap();
