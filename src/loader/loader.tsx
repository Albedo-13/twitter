import loader from "@assets/loader.svg";

import { LoaderWrapper, StyledLoader } from "./styled";

export function Loader() {
  return (
    <LoaderWrapper>
      <StyledLoader src={loader} />
    </LoaderWrapper>
  );
}
