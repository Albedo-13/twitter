import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  // TODO: isolate to layout
  max-width: 1520px;
  margin: 0 auto;
`;

export const NavigationWrapper = styled.div`
  flex-basis: 20%;
  border-right: 1px solid #d8d8d8;
`;

export const ContentWrapper = styled.div`
  flex-basis: 60%;
`;

export const SearchWrapper = styled.div`
  flex-basis: 20%;
`;
