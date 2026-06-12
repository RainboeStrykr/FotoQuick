// Icons
import { ReactComponent as Logo } from "assets/Logo.svg";
// Components (styles)
import { MainText } from "../index";

const mobileStyles = {
  width: "100%",
  display: "inherit",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

function Mobile() {
  return (
    <div style={mobileStyles}>
      <Logo style={{ width: "60%" }} />
      <MainText>FotoQuick works better on Desktop :)</MainText>
    </div>
  );
}

export default Mobile;
