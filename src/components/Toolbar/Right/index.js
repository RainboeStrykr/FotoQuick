import { ToolbarContext } from "App";
import { useContext } from "react";
// Components (styles)
import { RightContainer } from "../toolbar.styles";
// Components (child)
import ToolsList from "./tools";

function ToolbarRight() {
  const { open } = useContext(ToolbarContext);

  return (
    <>
      {open && (
        <RightContainer>
          <ul>
            <ToolsList />
          </ul>
        </RightContainer>
      )}
    </>
  );
}

export default ToolbarRight;
