// Providers
import { SliderContext, ToolsContext } from "App";
// Icons
import { ReactComponent as Brightness } from "assets/Brightness.svg";
import { ReactComponent as Contrast } from "assets/Contrast.svg";
import { ReactComponent as Grayscale } from "assets/Grayscale.svg";
import { ReactComponent as Hue } from "assets/Hue.svg";
import { ReactComponent as Invert } from "assets/Invert.svg";
import { ReactComponent as Saturation } from "assets/Saturation.svg";
import { ReactComponent as Sepia } from "assets/Sepia.svg";
import { useContext } from "react";
// i18n
import { useTranslation } from "react-i18next";
// Components (children)
import ToolItem from "./toolItem";

function ToolsList() {
  const { t } = useTranslation();
  // Manage the tool functions after active
  const { setShow } = useContext(SliderContext);
  // Manage the tool statement (active)
  const { activeTool, setActiveTool } = useContext(ToolsContext);

  // Tools properties
  const tools = [
    {
      key: 0,
      name: "Right.Items.One",
      image: <Brightness tabIndex="0" />,
      onActive: () => setShow(true),
    },
    {
      key: 1,
      name: "Right.Items.Two",
      image: <Contrast tabIndex="0" />,
      onActive: () => setShow(true),
    },
    {
      key: 2,
      name: "Right.Items.Three",
      image: <Saturation tabIndex="0" />,
      onActive: () => setShow(true),
    },
    {
      key: 3,
      name: "Right.Items.Four",
      image: <Grayscale tabIndex="0" />,
      onActive: () => setShow(true),
    },
    {
      key: 4,
      name: "Right.Items.Five",
      image: <Sepia tabIndex="0" />,
      onActive: () => setShow(true),
    },
    {
      key: 5,
      name: "Right.Items.Six",
      image: <Invert tabIndex="0" />,
      onActive: () => setShow(true),
    },
    {
      key: 6,
      name: "Right.Items.Seven",
      image: <Hue tabIndex="0" />,
      onActive: () => setShow(true),
    },
  ];
  const handleActiveTool = (active) => setActiveTool(active);

  return (
    <>
      {/* Tools → 5 */}
      {tools.map((tool, activeIndex) => (
        <ToolItem
          key={tool.key}
          active={activeIndex === activeTool}
          onActive={() => {
            handleActiveTool(activeIndex);
            tool.onActive();
          }}
          name={t(`${tool.name}`)}
          upcoming={tool.upcoming}
        >
          {tool.image}
        </ToolItem>
      ))}
    </>
  );
}

export default ToolsList;
