import { useAppDispatch } from "@/hooks/redux";
import { toggleTheme } from "@/redux/slices/theme-slice";

import { StyledSwitch, SwitchInput, SwitchSpan } from "./styled";

export function Switch() {
  const dispatch = useAppDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledSwitch className="switch" htmlFor="switch-theme">
      <SwitchInput
        id="switch-theme"
        type="checkbox"
        onChange={handleThemeChange}
      />
      <SwitchSpan className="switch-slider" />
    </StyledSwitch>
  );
}
