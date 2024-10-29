import styled from "styled-components";

export const AdminPanel = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  padding: 5px 0 10px;
  margin-bottom: 15px;
  border-bottom: var(--border-gray);
`;

export const AddButt = styled.button`
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  transition: 0.3s all;
  padding: 3px 5px;
  &:hover {
    background-color: var(--success-color);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
