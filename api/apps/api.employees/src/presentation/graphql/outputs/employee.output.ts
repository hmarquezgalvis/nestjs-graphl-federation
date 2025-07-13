import { Field, ObjectType } from '@nestjs/graphql';
import { UserExternal } from '../externals/user.external';

@ObjectType('Employee')
export class EmployeeOutput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  position: string;

  @Field()
  department: string;

  @Field({ nullable: true })
  user?: UserExternal;
}
