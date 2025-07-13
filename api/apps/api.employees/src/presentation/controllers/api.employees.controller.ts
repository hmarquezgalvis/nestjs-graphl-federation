import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiEmployeesController {
  @Get()
  getHello(): string {
    return 'Hello World from api.employees!';
  }
}
