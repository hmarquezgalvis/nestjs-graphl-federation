import { Employee } from '../employee';

export abstract class EmployeeRepository {
  abstract findAll(): Employee[];
}
