import Switch from "../switch/switch";
import { StyledToggleTheme, SwitchWrapper } from "./styled";

export function ToggleTheme() {
  return (
    <StyledToggleTheme>
      <SwitchWrapper>
        <Switch />
      </SwitchWrapper>
    </StyledToggleTheme>
  );
}
