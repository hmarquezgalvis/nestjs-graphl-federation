import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { ApiUsersController } from './api.users.controller';
import { ApiUsersService } from './api.users.service';
import { TestResolver } from './test/test.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      debug: true,
    }),
  ],
  controllers: [ApiUsersController],
  providers: [ApiUsersService, TestResolver],
})
export class ApiUsersModule {}
