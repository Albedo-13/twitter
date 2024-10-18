import { Fragment, ReactNode } from "react";

import MobileNavigation from "../navigation/mobile-navigation";
import { Switch } from "../switch/switch";
import { StyledHeader, SwitchWrapper,Title } from "./styled";
import { NavigationMobileWrapper } from "./styled";

export function Header({
  title,
  childrens,
}: {
  title: string;
  childrens?: ReactNode[];
}) {
  return (
    <StyledHeader>
      <NavigationMobileWrapper>
        <MobileNavigation />
      </NavigationMobileWrapper>
      <Title>{title}</Title>
      {childrens?.map((child, i) => <Fragment key={i}>{child}</Fragment>)}
      <SwitchWrapper>
        <Switch />
      </SwitchWrapper>
    </StyledHeader>
  );
}
