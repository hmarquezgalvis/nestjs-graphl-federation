import { Test, TestingModule } from '@nestjs/testing';
import { ApiEmployeesController } from './api.employees.controller';
import { ApiEmployeesService } from './api.employees.service';

describe('ApiEmployeesController', () => {
  let apiEmployeesController: ApiEmployeesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiEmployeesController],
      providers: [ApiEmployeesService],
    }).compile();

    apiEmployeesController = app.get<ApiEmployeesController>(
      ApiEmployeesController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiEmployeesController.getHello()).toBe('Hello World!');
    });
  });
});
