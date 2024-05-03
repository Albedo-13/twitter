import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
`;

export const NavListItem = styled.li`
  // TODO: remove
`;

export const NavListItemLink = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  padding-left: 20px;

  display: flex;
  align-items: center;
`;

export const NavListItemImage = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 15px;
`;

export const UserWrapper = styled.div`
  margin-top: 50px;
`;

export const UserCard = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 10px;
`;

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const UserName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #000;
`;

export const UserTag = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
  opacity: 0.6;
`;
