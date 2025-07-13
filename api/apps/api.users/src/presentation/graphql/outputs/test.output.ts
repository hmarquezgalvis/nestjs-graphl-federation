import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Test')
export class TestOutput {
  @Field()
  message: string;
}
