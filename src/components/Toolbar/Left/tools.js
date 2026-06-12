import { ToolbarContext } from "App";
// Icons
import { ReactComponent as Crop } from "assets/Crop.svg";
import { ReactComponent as Filter } from "assets/Filter.svg";
import { ReactComponent as Settings } from "assets/Settings.svg";
import { ReactComponent as Shortcuts } from "assets/Shortcuts.svg";
import { ReactComponent as Text } from "assets/Text.svg";
// i18n
import i18next from "i18next";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// Providers
import { ThemeContext } from "styled-components";
import { MainText } from "../../index";
import Modal from "../../Modal";
import Select from "../../Select";
import Switch from "../../Switch";
import Languages from "./languages.json";
// Components (children)
import ToolItem from "./toolItem";

const shortcutsStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

function ToolsList({ toggleTheme }) {
  const I18NEXT_KEY = "i18nextLng";
  const { t } = useTranslation();
  // Access and set the theme colors
  const { title } = useContext(ThemeContext);
  // Access and set the tool functions after active
  const { setOpen } = useContext(ToolbarContext);
  const [openShortcuts, setOpenShortcuts] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  // Manage the tool state (active)
  const [activeTool, setActiveTool] = useState();

  // i18n
  const [selectedValue, updateSelectedValue] = useState(
    localStorage.getItem(I18NEXT_KEY) || "en"
  );

  const changeLanguage = (option) => {
    updateSelectedValue(option.target.value);
    localStorage.setItem(I18NEXT_KEY, option.target.value);
    i18next.changeLanguage(option.target.value);
  };

  // Tools properties
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tools = [
    {
      key: 0,
      upcoming: true,
      name: "Left.Items.One",
      image: <Crop tabIndex="0" />,
      onActive: () => {},
    },
    {
      key: 1,
      upcoming: true,
      name: "Left.Items.Two",
      image: <Text tabIndex="0" />,
      onActive: () => {},
    },
    {
      key: 2,
      name: "Left.Items.Three",
      image: <Filter tabIndex="0" />,
      onActive: () => {
        setOpen(true);
      },
      onKeyDown: (e) => {
        if (e.code === "KeyF") {
          setOpen(true);
        } else if (e.code === "Escape") {
          setOpen(false);
        }
      },
    },
    {
      key: 3,
      name: "Left.Items.Four",
      image: <Shortcuts tabIndex="0" />,
      onActive: () => {
        setOpenShortcuts(true);
      },
      onKeyDown: (e) => {
        if (e.code === "Escape") {
          setOpenShortcuts(false);
          handleShortcutsOnBlur();
        }
      },
    },
    {
      key: 4,
      name: "Left.Items.Five",
      image: <Settings tabIndex="0" />,
      onActive: () => {
        setOpenSettings(true);
      },
      onKeyDown: (e) => {
        if (e.code === "KeyS") {
          setOpenSettings(true);
        } else if (e.code === "Escape") {
          setOpenSettings(false);
          handleSettingsOnBlur();
        }
      },
    },
  ];
  // Defines the active tool after the click
  const handleActiveTool = (active) => setActiveTool(active);
  // Active tool and toolbar at right lose the focus when the modal is closed
  const handleShortcutsOnBlur = (active) => {
    setOpenShortcuts(false);
    setActiveTool(!active);
    setOpen(false);
  };
  const handleSettingsOnBlur = (active) => {
    setOpenSettings(false);
    setActiveTool(!active);
    setOpen(false);
  };

  useEffect(() => {
    tools.map((tool) => {
      document.addEventListener("keydown", tool.onKeyDown);

      return () => document.removeEventListener("keydown", tool.onKeyDown);
    });
  }, [tools]);

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

      {/* Portal → Shortcuts */}
      <Modal
        toolName={t("Tools.Shortcuts.Name")}
        open={openShortcuts}
        onClose={handleShortcutsOnBlur}
      >
        <section>
          <MainText style={shortcutsStyles}>
            {t("Tools.Shortcuts.Items.Three")}
            <code>f</code>
          </MainText>
          <MainText style={shortcutsStyles}>
            {t("Tools.Shortcuts.Items.Four")}
            <code>s</code>
          </MainText>
        </section>
      </Modal>

      {/* Portal → Settings */}
      <Modal
        toolName={t("Tools.Settings.Name")}
        open={openSettings}
        onClose={handleSettingsOnBlur}
      >
        <section>
          <MainText>{t("Tools.Settings.Items.One")}</MainText>
          {/* Languages switcher */}
          <Select value={selectedValue} onSelectChange={changeLanguage}>
            {Languages.map((language) => (
              <option key={language.id} value={language.value}>
                {t(language.name)}
              </option>
            ))}
          </Select>

          <MainText>{t("Tools.Settings.Items.Two")}</MainText>
          {/* Theme switcher */}
          <Switch isToggled={title === "dark"} onSwitch={toggleTheme} />
        </section>
      </Modal>
    </>
  );
}

export default ToolsList;
