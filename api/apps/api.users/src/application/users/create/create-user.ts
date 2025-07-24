import { Injectable } from '@nestjs/common';
import { RoleID } from '../../../domain/roles/value-object';
import { User } from '../../../domain/users/user';
import { UserName, CompanyContext } from '../../../domain/users/value-objects';
import { UserRepository } from '../../../domain/users/interfaces/user.repository';
import { UserAlreadyExists } from '../../../domain/users/exceptions';
import { UserID } from '@libs/shared/domain/value-objects';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(
    username: UserName,
    // password: string,
    email: string,
    context: CompanyContext,
    roleIds: RoleID[],
  ): void {
    const userId = new UserID('U0001');
    this.ensureUserDoesNotExist(userId);
    const newUser = new User(userId, username, email, context, roleIds);

    this.userRepository.save(newUser);
  }

  private ensureUserDoesNotExist(userId: UserID): void {
    const existingUser = this.userRepository.findById(userId);

    if (existingUser) {
      throw new UserAlreadyExists(userId);
    }
  }
}
