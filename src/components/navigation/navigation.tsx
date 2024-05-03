import noAvatar from "@/assets/imgs/no_avatar.svg";
import { NAVIGATION_LINKS } from "@/constants/navigation-links";
import { ButtonGrayed, SignupButtonPrimary } from "@/ui/inputs/inputs";

import { Avatar } from "../avatar/avatar";
import { Logo } from "../logo/logo";
import {
  LogoWrapper,
  NavList,
  NavListItem,
  NavListItemImage,
  NavListItemLink,
  UserBlock,
  UserCard,
  UserName,
  UserTag,
  UserWrapper,
  Wrapper,
} from "./styled";

export function Navigation() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <nav>
        <NavList>
          {NAVIGATION_LINKS.map(({ label, to, icon, iconActive }) => (
            <NavListItem key={label}>
              <NavListItemLink to={to}>
                {/* TODO: is item active? different src args */}
                <NavListItemImage src={icon} alt={label} />
                {label}
              </NavListItemLink>
            </NavListItem>
          ))}
        </NavList>
      </nav>
      <SignupButtonPrimary type="button" value={"Tweet"} $margin="25px 0 0 0" />
      <UserWrapper>
        <UserCard>
          <Avatar src={noAvatar} />
          <UserBlock>
            <UserName>Bober</UserName>
            <UserTag>@bober_kurwa</UserTag>
          </UserBlock>
        </UserCard>
        <ButtonGrayed type="button" value={"Log out"} $margin="25px 0 0 0" />
      </UserWrapper>
    </Wrapper>
  );
}
