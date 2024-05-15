import { StyledError } from "./styled";

type AuthFirebaseErrorProps = {
  errorText: string | undefined;
};

export function AuthFirebaseError({ errorText }: AuthFirebaseErrorProps) {
  return <>{errorText && <StyledError>{errorText}</StyledError>}</>;
}
