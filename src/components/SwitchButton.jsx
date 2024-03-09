import { Switch } from "antd";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import darkLogo from "../themes/dark-icon.svg";
import lightLogo from "../themes/light-icon.svg";

export default function SwitchButton() {
    const { switcher, status, themes } = useThemeSwitcher();

    const toggleTheme = (isChecked) => {
        switcher({ theme: isChecked ? themes.dark : themes.light });
        if (isChecked) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    };
    if (status === "loading") {
        return null;
    }

    return (
        <Switch
            size="large"
            checked={localStorage.getItem("theme") === "dark" ? true : false}
            onChange={toggleTheme}
            checkedChildren={<img id="lightLogo" src={lightLogo} alt="light" />}
            unCheckedChildren={<img id="darkLogo" src={darkLogo} alt="dark" />}
        />
    );
}