import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiUsersController {
  @Get()
  getHello(): string {
    return 'Hello World from api.users!';
  }
}
