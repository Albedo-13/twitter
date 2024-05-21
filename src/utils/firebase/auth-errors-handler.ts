enum AuthErrors {
  INVALID_CREDENTIAL = "auth/invalid-credential",
  WRONG_PASSWORD = "auth/wrong-password",
  MISSING_PASSWORD = "auth/missing-password",
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  PHONE_IN_USE = "phone-in-use",
}

export const authErrorsHandler = (error: string) => {
  switch (error) {
    case AuthErrors.INVALID_CREDENTIAL:
      return "Invalid credential. Please try again";
    case AuthErrors.WRONG_PASSWORD:
      return "Wrong password. Please try again";
    case AuthErrors.MISSING_PASSWORD:
      return "Missing password. Please try again";
    case AuthErrors.EMAIL_ALREADY_IN_USE:
      return "This email is already registered. Please try again";
    case AuthErrors.PHONE_IN_USE:
      return "This phone is already registered. Please try again";
    default:
      return "Ooops, something went wrong... Please try again";
  }
};
