import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'apps/api.users/src/domain/entities/user.entity';

@ObjectType('User')
@Directive('@key(fields: "id")')
export class UserOutput {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  // @Field()
  // password: string;

  @Field({ nullable: true })
  email?: string;

  static fromDomain(user: User): UserOutput {
    if (!user) throw new Error('Not valid user entity');

    const output = new UserOutput();

    output.id = user.id;
    output.username = user.username;
    // output.password = user.password;
    output.email = user.email;

    return output;
  }
}
