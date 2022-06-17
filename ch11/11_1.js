function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`invaild email`);
}

const email = "jane_doe.com";

const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
  console.error(`Error: ${validatedEmail.message}`);
} else {
  console.log(`Valid email: ${validatedEmail}`);
}
