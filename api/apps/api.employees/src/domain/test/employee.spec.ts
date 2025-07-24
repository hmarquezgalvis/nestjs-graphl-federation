import { UserID } from '@libs/shared/domain/value-objects';
import { Employee } from '../employee';
import { EmployeeID } from '../value-objects';
import { EmployeeAlreadyHasUser } from '../exceptions';

const createValidEmployee = () => {
  return new Employee(
    new EmployeeID('1'),
    'John Doe',
    'Software Engineer',
    'Engineering',
  );
};
describe('Employee aggregate root', () => {
  describe('creation tests', () => {
    it('should create an employee without userId', () => {
      const employee = createValidEmployee();
      expect(employee).toBeDefined();
      expect(employee.name).toBe('John Doe');
    });

    it('should create an employee with userId', () => {
      const userId = new UserID('00000-00000-00000-00001');
      const employee = new Employee(
        new EmployeeID('1'),
        'John Doe',
        'Software Engineer',
        'Engineering',
        userId,
      );
      expect(employee.userId).toEqual(userId);
    });
  });

  describe('tests of update/change methods', () => {
    it('should change employee name', () => {
      const employee = createValidEmployee();
      employee.changeName('Jane Doe');
      expect(employee.name).toBe('Jane Doe');
    });

    it('should change employee position', () => {
      const employee = createValidEmployee();
      employee.changePosition('Senior Software Engineer');
      expect(employee.position).toBe('Senior Software Engineer');
    });

    it('should change employee department', () => {
      const employee = createValidEmployee();
      employee.changeDepartment('Product');
      expect(employee.department).toBe('Product');
    });

    it('should assign a user to an employee', () => {
      const employee = createValidEmployee();
      const userId = new UserID('00000-00000-00000-00002');
      employee.assignUser(userId);
      expect(employee.userId).toEqual(userId);
    });

    it('should throw an error when assigning a user to an employee that already has a user', () => {
      const employee = createValidEmployee();
      const userId1 = new UserID('00000-00000-00000-00002');
      const userId2 = new UserID('00000-00000-00000-00003');

      employee.assignUser(userId1);

      expect(() => {
        employee.assignUser(userId2);
      }).toThrow(new EmployeeAlreadyHasUser(userId2));
    });

    it('should remove user from employee', () => {
      const employee = createValidEmployee();
      const userId = new UserID('00000-00000-00000-00002');
      employee.assignUser(userId);
      expect(employee.userId).toEqual(userId);

      employee.removeUser();
      expect(employee.userId).toBeUndefined();
    });
  });
});
