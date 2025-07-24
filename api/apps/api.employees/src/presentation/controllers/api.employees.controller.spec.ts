import { Test, TestingModule } from '@nestjs/testing';
import { ApiEmployeesController } from './api.employees.controller';

describe('ApiEmployeesController', () => {
  let apiEmployeesController: ApiEmployeesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiEmployeesController],
      // providers: [ApiEmployeesService],
    }).compile();

    apiEmployeesController = app.get<ApiEmployeesController>(
      ApiEmployeesController,
    );
  });

  describe('root', () => {
    it('should return "Hello World from api.employees!"', () => {
      expect(apiEmployeesController.getHello()).toBe(
        'Hello World from api.employees!',
      );
    });
  });
});
