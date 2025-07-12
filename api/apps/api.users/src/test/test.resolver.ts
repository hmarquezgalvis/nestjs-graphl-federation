import { Query, Resolver } from '@nestjs/graphql';
import { Test } from './test.entity';

@Resolver(() => Test)
export class TestResolver {
  constructor() {}

  @Query(() => Test)
  getTest(): Test {
    return { message: 'Hello from Test!' };
  }
}
