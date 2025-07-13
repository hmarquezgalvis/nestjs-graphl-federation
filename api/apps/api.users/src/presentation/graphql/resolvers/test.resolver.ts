import { Query, Resolver } from '@nestjs/graphql';
import { getTestMessage } from '@libs/shared';
import { TestOutput } from '../outputs';

@Resolver(() => TestOutput)
export class TestResolver {
  constructor() {}

  @Query(() => TestOutput, { name: 'test' })
  getTest(): TestOutput {
    const message: string = getTestMessage();

    return { message };
  }
}
