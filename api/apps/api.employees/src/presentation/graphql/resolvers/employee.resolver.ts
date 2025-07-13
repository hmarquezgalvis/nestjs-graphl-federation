import { Query, Resolver } from '@nestjs/graphql';
import { EmployeeOutput } from '../outputs/employee.output';
import { EmployeeService } from 'apps/api.employees/src/application/services/employee.service';

@Resolver(() => EmployeeOutput)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query(() => [EmployeeOutput], { name: 'employees' })
  getEmployeeList(): EmployeeOutput[] {
    return this.employeeService.getList();
  }
}
