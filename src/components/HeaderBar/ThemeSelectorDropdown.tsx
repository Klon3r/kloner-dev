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
import themeIcon from "../../assets/icons/color-picker.png";
import { useEffect, useState } from "react";
import {
  getThemeFromLocalStorage,
  setColorTheme,
  setThemeInLocalStorage,
} from "@/utils/theme";

const ThemeSelectorDropdown = () => {
  const [colorPosition, setColorPosition] = useState(
    getThemeFromLocalStorage()
  );
  const [themeColor, setThemeColor] = useState(getThemeFromLocalStorage());

  const themeColorOnValueChange = (value: string) => {
    setColorPosition(value);
    setColorTheme(value);
    setThemeInLocalStorage(value);
  };

  const dropdownHoverStyle =
    "hover:cursor-pointer hover:bg-primary! hover:rounded-2xl!";

  useEffect(() => {
    setColorTheme(themeColor);
    setThemeColor(themeColor);
  }, []);

  return (
    <div className="ml-4 flex items-center z-100" data-testid="theme-container">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            className="hover:cursor-pointer dark:invert! w-6 mb-1"
            src={themeIcon}
            alt={"Color picker icon"}
            data-testid="theme-selector"
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
              themeColorOnValueChange(value);
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSelectorDropdown;
