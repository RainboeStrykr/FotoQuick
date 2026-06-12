import { Container } from "./tooltip.styles";

// Each tooltip will receive a children
// It will be an icon (toolbar items)
// with its name (tooltip content)
function ToolTip({ direction, children, name }) {
  return (
    <Container className={direction === "right" ? "right" : "left"}>
      {children}
      <span className={direction === "right" ? "right" : "left"}>{name}</span>
    </Container>
  );
}

export default ToolTip;
