import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import appConfig from './config/app.config';
import { ApiUsersController } from './api.users.controller';
import { ApiUsersService } from './api.users.service';
import { TestResolver } from './test/test.resolver';
import { UserService } from './users/user.service';
import { UsersResolver } from './users/user.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [ApiUsersController],
  providers: [ApiUsersService, UserService, TestResolver, UsersResolver],
})
export class ApiUsersModule {}
