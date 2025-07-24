import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { UserOutput } from '../outputs';
import { UserCreateResponse } from '../outputs/user-create.output';
import {
  CompanyContext,
  UserName,
} from 'apps/api.users/src/domain/users/value-objects';
import { CreateUserPayload } from '../inputs/user-create.payload';
import { CreateUserUseCase } from 'apps/api.users/src/application/users/create/create-user';
import { RoleID } from 'apps/api.users/src/domain/roles/value-object';
import { UserFindByIdUseCase } from 'apps/api.users/src/application/users/finder/user-find-by-id';
import { UserFindUseCase } from 'apps/api.users/src/application/users/finder/user-find';

@Resolver(() => UserOutput)
export class UsersResolver {
  constructor(
    private readonly createUser: CreateUserUseCase,
    private readonly userFindById: UserFindByIdUseCase,
    private readonly userFind: UserFindUseCase,
  ) {}

  @Query(() => [UserOutput], {
    name: 'users',
    description: 'Get list of users',
  })
  getUserList(): UserOutput[] {
    return this.userFind.execute();
  }

  @Query(() => UserOutput, {
    name: 'user',
    description: 'Get user by ID',
  })
  getUserById(@Args('id') id: string): UserOutput | undefined {
    return this.userFindById.execute(id);
  }

  @Mutation(() => UserCreateResponse, {
    name: 'createUser',
  })
  userCreate(@Args('payload') payload: CreateUserPayload): UserCreateResponse {
    this.createUser.execute(
      new UserName(payload.username),
      payload.email,
      new CompanyContext(
        payload.companyId,
        payload.departmentId,
        payload.branchId,
      ),
      payload.roleIds.map((roleId) => new RoleID(roleId)),
    );

    return { success: true };
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): UserOutput | undefined {
    return this.userFindById.execute(reference.id);
  }
}
