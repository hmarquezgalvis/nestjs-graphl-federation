import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('UserCreateResponse')
export class UserCreateResponse {
  @Field(() => Boolean)
  success: boolean;
}
