import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  background: var(--search-input-color);
  border-radius: 30px;
  min-height: 55px;
  width: 100%;
  transition: var(--theme-change-time);
`;

export const SearchText = styled.input`
  font-size: 18px;
  padding-left: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  left: 20px;
  filter: ${({ theme }) => theme.svgFill.primary};
  position: absolute;
`;
