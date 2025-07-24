import { Injectable } from '@nestjs/common';
import { UserRepository } from 'apps/api.users/src/domain/users/interfaces/user.repository';
import { UserNotExists } from '../../../domain/users/exceptions';
import { UserID } from '@libs/shared/domain/value-objects';

@Injectable()
export class UserFindByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(id: string) {
    const userId = new UserID(id);
    const user = this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotExists(userId);
    }

    return {
      id: user.id.value,
      username: user.username.value,
      email: user.email,
    };
  }
}
