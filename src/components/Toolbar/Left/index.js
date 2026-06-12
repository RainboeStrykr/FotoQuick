// Components (styles)
import { LeftContainer } from "../toolbar.styles";
// Components (children)
import ToolsList from "./tools";

function ToolbarLeft({ toggleTheme }) {
  return (
    <LeftContainer>
      <ul>
        <ToolsList toggleTheme={toggleTheme} />
      </ul>
    </LeftContainer>
  );
}

export default ToolbarLeft;
