// Employee class represents the base class for all employees in the team.

class Employee {
    // Constructor initializes an instance of the Employee class with provided name, id, and email.
    constructor(name, id, email) {
      this.name = name;   // Name of the employee
      this.id = id;       // ID of the employee
      this.email = email; // Email of the employee
    }
  
    // Method returns the name of the employee.
    getName() {
      return this.name;
    }
  
    // Method returns the ID of the employee.
    getId() {
      return this.id;
    }
  
    // Method returns the email of the employee.
    getEmail() {
      return this.email;
    }
  
    // Method returns the role of the employee (default is 'Employee').
    getRole() {
      return 'Employee';
    }
  }
  
  // Export the Employee class to be used in other modules.
  module.exports = Employee;

