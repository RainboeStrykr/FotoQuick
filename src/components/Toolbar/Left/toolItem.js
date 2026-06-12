// i18n
import { useTranslation } from "react-i18next";
// Components (children)
import ToolTip from "../../Tooltip";
// Components (styles)
import { ItemContent } from "../toolbar.styles";

// Each item will have an icon, a name, and shortcut
// It will be envolved by a tooltip
function ToolItem({ upcoming, active, onActive, name, children }) {
  const { t } = useTranslation();

  return (
    <ItemContent
      className={upcoming ? "upcoming" : ""}
      onClick={upcoming ? undefined : onActive}
    >
      <div className={active ? "activeItem" : ""} />

      <ToolTip direction={"right"} name={upcoming ? t("Upcoming") : name}>
        {children}
      </ToolTip>
    </ItemContent>
  );
}

export default ToolItem;
