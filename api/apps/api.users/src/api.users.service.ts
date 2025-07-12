import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiUsersService {
  getHello(): string {
    return 'Hello World from api.users!';
  }
}
