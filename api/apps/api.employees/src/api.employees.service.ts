import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiEmployeesService {
  getHello(): string {
    return 'Hello World!';
  }
}
