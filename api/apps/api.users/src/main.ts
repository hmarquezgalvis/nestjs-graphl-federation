import { NestFactory } from '@nestjs/core';
import { ApiUsersModule } from './api.users.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiUsersModule);
  await app.listen(process.env.port ?? 4010);
}
void bootstrap();
