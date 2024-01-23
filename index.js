//Import necessary modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template');

//Define the output directory and file path for the generated HTML
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// Create an array to store team members
const team = [];

// Function to prompt for the next team member or finish the process.
const promptNextMember = async () => {
// Define a question asking the user to select a team member or finish
  const nextMemberQuestion = [
    {
      type: 'list',
      name: 'nextMember',
      message: 'Please select a team member:',
      choices: ['Manager', 'Engineer', 'Intern', 'Finish'],
    },
  ];

  // Ask the user and get the selected option
  const { nextMember } = await inquirer.prompt(nextMemberQuestion);

  // Check if the output directory exists, if not, create it
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  // Check the user's choice and proceed accordingly
  if (nextMember === 'Manager') {
    await promptManager();
  } else if (nextMember === 'Engineer') {
    await promptEngineer();
  } else if (nextMember === 'Intern') {
    await promptIntern();
  } else if (nextMember === 'Finish') {

// Finish gathering information, generate HTML, and write to file
    const html = render(team);
    fs.writeFileSync(outputPath, html);
    console.log(`Team HTML generated at: ${outputPath}`);
  } else {
    console.log('Invalid choice. Please select a valid team member or finish.');
    await promptNextMember(); // Ask the question again if the choice is invalid.
  }
};

// Function to prompt for Manager details
const promptManager = async () => {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Manager's id?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the Manager's office number?",
    },
  ];

// Ask the user and get the answers
  const answers = await inquirer.prompt(managerQuestions);

  // Create a new Manager instance with the provided answers and add it to the team
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  team.push(manager);

// Proceed to prompt for the next team member.
  await promptNextMember();
};

// Function to prompt for Engineer details
const promptEngineer = async () => {
  const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineer name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Engineer id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Engineer email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the Engineer github?',
      },
  ];

  const answers = await inquirer.prompt(engineerQuestions);

  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  team.push(engineer);

  await promptNextMember();
};

// Function to prompt for Intern details
const promptIntern = async () => {
  const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Intern name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Intern id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Intern email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school did the Intern attend?',
      },
  ];

  const answers = await inquirer.prompt(internQuestions);

  const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
  team.push(intern);

  await promptNextMember();
};

// Start the process by prompting for the first team member
promptNextMember();

// // Initial function to start the process
// const askQuestion = async () => {
//   await promptManager();
// };

// // Start the process
// askQuestion();
