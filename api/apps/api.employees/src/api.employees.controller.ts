import { Controller, Get } from '@nestjs/common';
import { ApiEmployeesService } from './api.employees.service';

@Controller()
export class ApiEmployeesController {
  constructor(private readonly apiEmployeesService: ApiEmployeesService) {}

  @Get()
  getHello(): string {
    return this.apiEmployeesService.getHello();
  }
}
