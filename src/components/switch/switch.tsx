import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getThemeSelector } from "@/redux/selectors/theme-selectors";
import { toggleTheme } from "@/redux/slices/theme-slice";

import { StyledSwitch, SwitchInput, SwitchSpan } from "./styled";

export function Switch() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    }
  }, [theme]);

  const handleThemeChange = () => {
    setChecked((prev) => !prev);
    dispatch(toggleTheme());
  };

  return (
    <StyledSwitch className="switch" htmlFor="switch-theme">
      <SwitchInput
        id="switch-theme"
        type="checkbox"
        checked={checked}
        onChange={handleThemeChange}
      />
      <SwitchSpan className="switch-slider" />
    </StyledSwitch>
  );
}
