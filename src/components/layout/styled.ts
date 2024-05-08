import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1520px;
  margin: 0 auto;
`;

export const NavigationWrapper = styled.div`
  flex-basis: 20%;
`;

export const ContentWrapper = styled.div`
  flex-basis: 60%;
  border-left: ${({ theme }) => theme.border.gray};
  border-right: ${({ theme }) => theme.border.gray};
`;

export const SearchWrapper = styled.div`
  flex-basis: 20%;
`;
