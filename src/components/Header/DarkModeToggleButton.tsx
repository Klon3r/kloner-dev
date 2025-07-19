import moonIcon from "../../assets/icons/moon.png";
import sunIcon from "../../assets/icons/sun.png";
import { darkModeButtonStyle, themeButtonStyle } from "./Style";

type DarkModeToggleButtonProps = {
  onClick: () => void;
  isDarkMode: boolean;
};

const DarkModeToggleButton = ({
  onClick,
  isDarkMode,
}: DarkModeToggleButtonProps) => {
  return (
    <div>
      <button className={themeButtonStyle} onClick={onClick}>
        <img
          className={darkModeButtonStyle}
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "Sun icon" : "Moon icon"}
        />
      </button>
    </div>
  );
};

export default DarkModeToggleButton;
