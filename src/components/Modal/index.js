// Icons
import { ReactComponent as Close } from "assets/Close.svg";
import { createPortal } from "react-dom";
import { Heading } from "../index";
// Components (styles)
import { Overlay, Wrapper } from "./modal.styles";

function Modal({ open, onClose, toolName, children }) {
  if (!open) return null;

  return createPortal(
    <>
      <Overlay onClick={onClose} />
      <Wrapper>
        <button onClick={onClose}>
          <Close />
        </button>

        <Heading>{toolName}</Heading>

        <section>{children}</section>
      </Wrapper>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
