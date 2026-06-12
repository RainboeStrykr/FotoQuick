// Components (styles)
import { CustomSelect } from "./select.styles";

function Select(props) {
  return (
    <CustomSelect value={props.value} onChange={props.onSelectChange}>
      {props.children}
    </CustomSelect>
  );
}

export default Select;
