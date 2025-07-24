Feature: Employee Management

Scenario: Create a new employee
Given the following employee data:
  | name       | John Doe     |
  | position   | Software Engineer |
  | department | Engineering  |
When I create a new employee
Then the employee should be created successfully
And the response should contain the employee ID

Scenario: Update an existing employee
Given an existing employee with ID "123"
When I update the employee's position to "Senior Software Engineer"
Then the employee's position should be updated successfully

Scenario: Delete an employee
Given an existing employee with ID "123"
When I delete the employee
Then the employee should be deleted successfully
And the response should confirm deletion