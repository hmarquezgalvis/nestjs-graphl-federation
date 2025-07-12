import { Test, TestingModule } from '@nestjs/testing';
import { ApiUsersController } from './api.users.controller';
import { ApiUsersService } from './api.users.service';

describe('ApiUsersController', () => {
  let apiUsersController: ApiUsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiUsersController],
      providers: [ApiUsersService],
    }).compile();

    apiUsersController = app.get<ApiUsersController>(ApiUsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiUsersController.getHello()).toBe('Hello World!');
    });
  });
});
