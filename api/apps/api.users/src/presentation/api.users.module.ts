import { GraphQLError } from 'graphql';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import {
  ThrottlerModule,
  type ThrottlerModuleOptions,
} from '@nestjs/throttler';

import appConfig from './config/app.config';
import { TestResolver } from './graphql/resolvers/test.resolver';
import { UsersResolver } from './graphql/resolvers/user.resolver';
import { ApiUsersController } from './controllers';
import { UserRepository } from '../domain/users/interfaces/user.repository';
import { InMemoryUserRepository } from '../infrastructure/persistence/in-memory-user.repository';
import { CreateUserUseCase } from '../application/users/create/create-user';
import { UserFindByIdUseCase } from '../application/users/finder/user-find-by-id';
import { UserFindUseCase } from '../application/users/finder/user-find';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        autoSchemaFile: {
          federation: 2,
        },
        context: ({ req, res }) => ({
          req: req as Request,
          res: res as Response,
        }),
        formatError: (formatted, error: GraphQLError) => {
          return {
            message: error?.message,
            code: error.originalError?.name || formatted.extensions?.code,
            timestamp: new Date().toISOString(),
          };
        },
        introspection: true,
        playground: false,
        plugins: config.get<boolean>('app.graphql.playground')
          ? [ApolloServerPluginLandingPageLocalDefault()]
          : undefined,
        debug: config.get<boolean>('app.graphql.debug'),
      }),
    }),
    ThrottlerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService): ThrottlerModuleOptions => [
        {
          ttl: config.get<number>('app.throttle.ttl')!,
          limit: config.get<number>('app.throttle.limit')!,
        },
      ],
    }),
  ],
  controllers: [ApiUsersController],
  providers: [
    TestResolver,
    UsersResolver,
    CreateUserUseCase,
    UserFindByIdUseCase,
    UserFindUseCase,
    {
      provide: UserRepository,
      useClass: InMemoryUserRepository,
    },
  ],
})
export class ApiUsersModule {}
