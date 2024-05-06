// import { useContext } from "react";
// import { ThemeContext } from "@/components/Providers/ThemeProvider";
import { StyledSwitch, SwitchInput, SwitchSpan } from "./styled";

export default function Switch() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledSwitch className="switch" htmlFor="switch-theme">
      <SwitchInput
        id="switch-theme"
        type="checkbox"
        // onChange={toggleTheme}
        // checked={!theme}
      />
      <SwitchSpan className="switch-slider" />
    </StyledSwitch>
  );
}
