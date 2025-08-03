import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import moonIcon from "../../assets/icons/moon.png";
import sunIcon from "../../assets/icons/sun.png";
import { useEffect, useState } from "react";
import { setColorTheme } from "@/utils/theme";

type ThemeSelectorDropdownType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeSelectorDropdown = ({
  isDarkMode,
  setIsDarkMode,
}: ThemeSelectorDropdownType) => {
  const [colorPosition, setColorPosition] = useState("violet");
  const [darkModePosition, setDarkModePosition] = useState(String(isDarkMode));
  const [themeColor, setThemeColor] = useState("violet");

  const dropdownHoverStyle =
    "hover:cursor-pointer hover:bg-primary! hover:rounded-2xl!";

  useEffect(() => {
    setColorTheme(themeColor, isDarkMode);
    setThemeColor("violet"); // TODO: Remove one localStorage themes is added
  }, []);

  return (
    <div className="ml-4 flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            className="hover:cursor-pointer dark:invert! w-6"
            src={isDarkMode ? sunIcon : moonIcon}
            alt={isDarkMode ? "Sun icon" : "Moon icon"}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-30 bg-accent border-primary border-1 rounded-2xl p-2 mt-4"
          align="end"
        >
          <DropdownMenuLabel className="text-center">
            Theme color
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={colorPosition}
            onValueChange={(value) => {
              setColorPosition(value);
              setColorTheme(value, isDarkMode);
            }}
          >
            <DropdownMenuRadioItem value="red" className={dropdownHoverStyle}>
              Red
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="blue" className={dropdownHoverStyle}>
              Blue
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="violet"
              className={dropdownHoverStyle}
            >
              Violet
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="green" className={dropdownHoverStyle}>
              Green
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              value="yellow"
              className={dropdownHoverStyle}
            >
              Yellow
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="orange"
              className={dropdownHoverStyle}
            >
              Orange
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuLabel className="text-center">
            Dark mode
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={darkModePosition}
            onValueChange={(value) => {
              setDarkModePosition(value);
              setIsDarkMode(value === "true");
              setColorTheme(colorPosition, value === "true");
            }}
          >
            <DropdownMenuRadioItem value="true" className={dropdownHoverStyle}>
              On
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="false" className={dropdownHoverStyle}>
              Off
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSelectorDropdown;
