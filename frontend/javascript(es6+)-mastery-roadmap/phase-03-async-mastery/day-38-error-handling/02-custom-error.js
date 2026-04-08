// Custom Error Class

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required");
  }
  return true;
}

try {
  validateUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else {
    console.error("Unknown Error:", error);
  }
}
