import noAvatar from "@/assets/imgs/no_avatar.svg";
import { NAVIGATION_LINKS } from "@/constants/navigation-links";
import { Button } from "@/ui/buttons/buttons";

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
          {NAVIGATION_LINKS.map(({ label, to, icon, isEnabled }) => (
            <NavListItem key={label}>
              <NavListItemLink to={to} $isEnabled={isEnabled}>
                <NavListItemImage src={icon} alt={label} />
                {label}
              </NavListItemLink>
            </NavListItem>
          ))}
        </NavList>
      </nav>
      <Button
        $variant="primary"
        $size="medium"
        type="button"
        $margin="25px 0 0 0"
      >
        Tweet
      </Button>
      <UserWrapper>
        <UserCard>
          <Avatar src={noAvatar} />
          <UserBlock>
            <UserName>Bober</UserName>
            <UserTag>@bober_kurwa</UserTag>
          </UserBlock>
        </UserCard>
        <Button
          $variant="secondary"
          $size="large"
          type="button"
          $margin="25px 0 0 0"
        >
          Log out
        </Button>
      </UserWrapper>
    </Wrapper>
  );
}
