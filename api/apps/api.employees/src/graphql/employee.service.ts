import { Injectable } from '@nestjs/common';
import { Employee } from './employee.output';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [
    {
      id: '1',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      user: { id: '1' },
    },
    {
      id: '2',
      name: 'Jane Smith',
      position: 'Product Manager',
      department: 'Product',
      // user: { id: '2' },
    },
  ];

  constructor() {}

  getList(): Employee[] {
    return this.employees;
  }
}
