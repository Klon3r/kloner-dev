import moonIcon from "../../assets/icons/moon.png";
import sunIcon from "../../assets/icons/sun.png";

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
      <button className="w-full pl-0 mt-1 ml-4" onClick={onClick}>
        <img
          className="!border-none !shadow-none w-7! h-6 mt-1 object-contain filter hover:cursor-pointer dark:invert mr-0!"
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "Sun icon" : "Moon icon"}
        />
      </button>
    </div>
  );
};

export default DarkModeToggleButton;
