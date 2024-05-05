import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-top: 15px;
`;

export const UserTag = styled.p`
  font-size: 18px;
  opacity: 0.6;
`;

export const UserText = styled.p`
  font-size: 18px;
  text-overflow: ellipsis;
  max-height: 40px;
  overflow: hidden;
  margin-bottom: 15px;
  border-bottom: 1px solid #d8d8d8;
`;
