import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
@Directive('@extends')
@Directive('@key(fields: "id")')
export class UserExternal {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
