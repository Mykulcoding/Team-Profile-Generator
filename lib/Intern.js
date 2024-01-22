// Intern class represents a specific type of Employee, extending the Employee class.

// Import the Employee class to inherit its properties and methods.
const Employee = require('./Employee');

class Intern extends Employee {
  // Constructor initializes an instance of the Intern class with provided name, id, email, and school.
  constructor(name, id, email, school) {
    super(name, id, email);  // Call the constructor of the base class (Employee) using super().
    this.school = school;     // Specific property for Intern representing the school they are attending.
  }

  // Method returns the school of the intern.
  getSchool() {
    return this.school;
  }

  // Method returns the role of the intern (overrides the getRole method in the base class).
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class to be used in other modules.
module.exports = Intern;


