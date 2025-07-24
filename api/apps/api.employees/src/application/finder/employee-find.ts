import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from '../../domain/interfaces/employee.repository';

@Injectable()
export class EmployeeFind {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  execute() {
    const employees = this.employeeRepository.findAll();

    return employees.map((employee) => ({
      id: employee.id.value,
      name: employee.name,
      position: employee.position,
      department: employee.department,
      user: employee.userId ? { id: employee.userId.value } : undefined,
    }));
  }
}
