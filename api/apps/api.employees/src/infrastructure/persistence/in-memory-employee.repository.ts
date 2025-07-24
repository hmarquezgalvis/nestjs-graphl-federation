import { UserID } from '@libs/shared/domain/value-objects';
import { Employee } from '../../domain/employee';
import { EmployeeRepository } from '../../domain/interfaces/employee.repository';
import { EmployeeID } from '../../domain/value-objects';

export class InMemoryEmployeeRepository implements EmployeeRepository {
  private employees: Employee[] = [
    new Employee(
      new EmployeeID('1'),
      'John Doe',
      'Software Engineer',
      'Engineering',
      new UserID('0000-0000-0000-0001'),
    ),
    new Employee(
      new EmployeeID('2'),
      'Jane Smith',
      'Product Manager',
      'Product',
      undefined, // No user assigned
    ),
    new Employee(
      new EmployeeID('3'),
      'Alice Johnson',
      'UX Designer',
      'Design',
      new UserID('0000-0000-0000-0002'),
    ),
  ];

  findAll(): Employee[] {
    return [...this.employees];
  }
}
