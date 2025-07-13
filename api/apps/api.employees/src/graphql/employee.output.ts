import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.external';

@ObjectType()
export class Employee {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  position: string;

  @Field()
  department: string;

  @Field({ nullable: true })
  user?: User;
}
