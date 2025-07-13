import { Query, Resolver } from '@nestjs/graphql';
import { Employee } from './employee.output';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'employees' })
  getEmployeeList(): Employee[] {
    return this.employeeService.getList();
  }
}
