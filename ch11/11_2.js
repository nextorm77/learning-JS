function validateEmail(email) {
  return email.match(/@/) ? email : new Error(`invaild email`);
}

const email = null; //validateEmail() -> email.match()에서 에러 발생

try {
  const validatedEmail = validateEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
  } else {
    console.log(`Valid email: ${validatedEmail}`);
  }
} catch (err) {
  console.log(`Error: ${err.message}`);
}
