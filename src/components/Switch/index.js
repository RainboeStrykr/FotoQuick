// Components (styles)
import { CustomSwitch } from "./switch.styles";

function Switch({ isToggled, onSwitch }) {
  return (
    <CustomSwitch>
      <input type="checkbox" checked={isToggled} onChange={onSwitch} />
      <span />
    </CustomSwitch>
  );
}

export default Switch;
