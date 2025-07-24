import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserPayload {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  companyId: string;

  @Field()
  departmentId: string;

  @Field()
  branchId: string;

  @Field(() => [String])
  roleIds: string[];

  @Field({ nullable: true })
  password?: string;
}
