import { Injectable } from '@nestjs/common';
import { UserRepository } from 'apps/api.users/src/domain/users/interfaces/user.repository';

@Injectable()
export class UserFindUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute() {
    const users = this.userRepository.findAll();

    return users.map((user) => ({
      id: user.id.value,
      username: user.username.value,
      email: user.email,
      companyContext: {
        companyId: user.context.companyId,
        departmentId: user.context.departmentId,
        branchId: user.context.branchId,
      },
      roleIds: user.roleIds.map((role) => role.value),
    }));
  }
}
