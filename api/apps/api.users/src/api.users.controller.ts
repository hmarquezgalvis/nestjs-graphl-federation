import { Controller, Get } from '@nestjs/common';
import { ApiUsersService } from './api.users.service';

@Controller()
export class ApiUsersController {
  constructor(private readonly apiUsersService: ApiUsersService) {}

  @Get()
  getHello(): string {
    return this.apiUsersService.getHello();
  }
}
