// Random utility function: Generate a random password
function generateRandomPassword(length = 12) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword(16);
console.log("Generated Password:", randomPassword);

// Another example: Calculate the factorial of a random number
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

const randomNum = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
const result = factorial(randomNum);
console.log(`Factorial of ${randomNum} is ${result}`);
