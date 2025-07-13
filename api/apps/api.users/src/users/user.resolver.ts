import { Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  getUserList(): User[] {
    return this.userService.getList();
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): User | undefined {
    return this.userService.getById(reference.id);
  }
}
