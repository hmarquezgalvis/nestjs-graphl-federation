import { Query, Resolver } from '@nestjs/graphql';
import { Test } from './test.entity';
import { getTestMessage } from '@libs/shared';

@Resolver(() => Test)
export class TestResolver {
  constructor() {}

  @Query(() => Test)
  getTest(): Test {
    const message: string = getTestMessage();

    return { message };
  }
}
