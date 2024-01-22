// Engineer class represents a specific type of Employee, extending the Employee class.

// Import the Employee class to inherit its properties and methods.
const Employee = require('./Employee');

class Engineer extends Employee {
  // Constructor initializes an instance of the Engineer class with provided name, id, email, and github.
  constructor(name, id, email, github) {
    super(name, id, email);  // Call the constructor of the base class (Employee) using super().
    this.github = github;     // Specific property for Engineer representing their GitHub username.
  }

  // Method returns the GitHub username of the engineer.
  getGithub() {
    return this.github;
  }

  // Method returns the role of the engineer (overrides the getRole method in the base class).
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class to be used in other modules.
module.exports = Engineer;


// Comments explains code purpose of the class, the constructor, and each method within the class. 
//It also highlights the inheritance relationship with the Employee class and the specific properties/methods added for the Engineer class.