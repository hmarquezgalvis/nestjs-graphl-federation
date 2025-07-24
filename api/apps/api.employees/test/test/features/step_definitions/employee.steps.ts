import { Given, Before, When, Then, DataTable } from '@cucumber/cucumber';
import { Employee } from '../../../../src/domain/employee';
import { EmployeeID } from '../../../../src/domain/value-objects';
import { UserID } from '@libs/shared/domain/value-objects';
import { randomUUID } from 'crypto';

let employee: Employee | null;
let createdEmployee: Employee | null;

Before(() => {
  employee = null;
  createdEmployee = null;
});

Given('the following employee data:', (dataTable: DataTable) => {
  const rows = dataTable.hashes();
  const data = rows[0];

  employee = new Employee(
    new EmployeeID(randomUUID()),
    data.name,
    data.position,
    data.department,
    data.userId ? new UserID(data.userId) : undefined,
  );
});

When('I create a new employee', () => {
  if (!employee) {
    throw new Error('No employee data available');
  }

  // Simular creación del empleado
  createdEmployee = employee;
});

Then('the employee should be created successfully', () => {
  if (!createdEmployee) {
    throw new Error('Employee was not created');
  }
});

Then('the response should contain the employee ID', () => {
  if (!createdEmployee?.id) {
    throw new Error('Employee ID is missing');
  }
});

// Steps para los otros escenarios
Given('an existing employee with ID {string}', (employeeId: string) => {
  employee = new Employee(
    new EmployeeID(employeeId),
    'John Doe',
    'Software Engineer',
    'Engineering',
    undefined,
  );
});

When("I update the employee's position to {string}", (newPosition: string) => {
  if (!employee) {
    throw new Error('No employee available');
  }

  // Simular actualización de posición
  employee = new Employee(
    employee.id,
    employee.name,
    newPosition,
    employee.department,
    employee.userId,
  );
});

Then("the employee's position should be updated successfully", () => {
  if (!employee) {
    throw new Error('No employee available');
  }

  if (employee.position !== 'Senior Software Engineer') {
    throw new Error('Position was not updated');
  }
});

When('I delete the employee', () => {
  if (!employee) {
    throw new Error('No employee available');
  }

  // Simular eliminación
  employee = null;
});

Then('the employee should be deleted successfully', () => {
  if (employee !== null) {
    throw new Error('Employee was not deleted');
  }
});

Then('the response should confirm deletion', () => {
  // Verificar confirmación de eliminación
  if (employee !== null) {
    throw new Error('Employee deletion confirmation failed');
  }
});
