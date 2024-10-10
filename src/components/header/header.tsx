import { Switch } from "../switch/switch";
import { StyledHeader, Title, SwitchWrapper } from "./styled";
import MobileNavigation from "../navigation/mobile-navigation";

import { NavigationMobileWrapper } from "./styled";

export function Header({ title }: { title: string }) {
  return (
    <StyledHeader>
      <NavigationMobileWrapper>
        <MobileNavigation />
      </NavigationMobileWrapper>
      <Title>{title}</Title>
      <SwitchWrapper>
        <Switch />
      </SwitchWrapper>
    </StyledHeader>
  );
}
