const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine the grade
function getStudentGrade(marks) {
    let grade;

    // Determine the grade based on marks
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the grade
    console.log(`Grade: ${grade}`);
}

// Prompt the user for input
rl.question("Enter student marks (0-100): ", (input) => {
    // Convert the input to a number
    const marks = Number(input);

    // Check if the input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Please enter a valid mark between 0 and 100.");
    } else {
        getStudentGrade(marks);
    }

    // Close the readline interface
    rl.close();
});

