export const loginErrorsHandler = (
  error: string,
  setter: (value: React.SetStateAction<string>) => void
) => {
  switch (error) {
    case "auth/invalid-credential":
      setter("Invalid credential. Please try again");
      break;
    case "auth/wrong-password":
      setter("Wrong password. Please try again");
      break;
    case "auth/missing-password":
      setter("Missing password. Please try again");
      break;
    case "auth/email-already-in-use":
      setter("This email is already registered. Please try again");
      break;
    case "phone-in-use":
      setter("This phone is already registered. Please try again");
      break;
    default:
      setter("Ooops, something went wrong... Please try again");
      break;
  }
};
// TODO: в enum