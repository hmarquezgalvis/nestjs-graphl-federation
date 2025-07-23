import { GraphQLError } from 'graphql';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import appConfig from './config/app.config';
import { EmployeeService } from './application/services/employee.service';
import { ApiEmployeesController } from './presentation/controllers/api.employees.controller';
import { EmployeeResolver } from './presentation/graphql/resolvers/employee.resolver';

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
      useFactory: () => ({
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
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        debug: false,
      }),
    }),
  ],
  controllers: [ApiEmployeesController],
  providers: [EmployeeService, EmployeeResolver],
})
export class ApiEmployeesModule {}
