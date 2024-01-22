// Manager class represents a specific type of Employee, extending the Employee class.

// Import the Employee class to inherit its properties and methods.
const Employee = require('./Employee');

class Manager extends Employee {
  // Constructor initializes an instance of the Manager class with provided name, id, email, and officeNumber.
  constructor(name, id, email, officeNumber) {
    super(name, id, email);  // Call the constructor of the base class (Employee) using super().
    this.officeNumber = officeNumber; // Specific property for Manager representing their office number.
  }

  // Method returns the office number of the manager.
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method returns the role of the manager (overrides the getRole method in the base class).
  getRole() {
    return 'Manager';
  }
}

// Export the Manager class to be used in other modules.
module.exports = Manager;
