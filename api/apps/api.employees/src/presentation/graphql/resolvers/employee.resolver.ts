import { Query, Resolver } from '@nestjs/graphql';
import { EmployeeOutput } from '../outputs/employee.output';
import { EmployeeFind } from 'apps/api.employees/src/application/finder/employee-find';

@Resolver(() => EmployeeOutput)
export class EmployeeResolver {
  constructor(private readonly employeeFind: EmployeeFind) {}

  @Query(() => [EmployeeOutput], { name: 'employees' })
  getEmployeeList(): EmployeeOutput[] {
    return this.employeeFind.execute();
  }
}
