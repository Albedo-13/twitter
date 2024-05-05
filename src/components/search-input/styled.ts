import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #eff3f4;
  border-radius: 31px;
  width: 100%;
  min-height: 55px;

  position: relative;
`;

export const SearchText = styled.input`
  background-color: transparent;
  font-size: 18px;
  border: none;
  width: 100%;
  padding-left: 50px;
  outline: none;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
`;
