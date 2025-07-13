import { Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UserOutput } from '../outputs';
import { UserService } from 'apps/api.users/src/application/services/user.service';

@Resolver(() => UserOutput)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserOutput], { name: 'users' })
  getUserList(): UserOutput[] {
    return this.userService.getList();
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): UserOutput | undefined {
    return this.userService.getById(reference.id);
  }
}
