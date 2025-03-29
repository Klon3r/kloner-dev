import { useEffect, useState } from "react";
import DarkModeToggleButton from "./DarkModeToggleButton";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleTheme = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  };

  const setTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  };

  const checkThemeInBrowser = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      toggleTheme();
  };

  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkThemeInBrowser();
    checkMobileDevice();
    setTheme();

    window.addEventListener("resize", checkMobileDevice);
    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center mb-15 px-4 w-fit mx-auto">
        <div className="flex justify-center border-b-1 pt-3 mx-auto dark:text-white max-w-screen-lg w-full">
          <h3 className="pb-2 text-3xl pr-1 pl-4">
            <span className="text-purple-500">kloner</span>
            .dev
          </h3>
          <HeaderLinks isMobile={isMobile} />
          <DarkModeToggleButton onClick={toggleTheme} isDarkMode={isDarkMode} />
        </div>
      </div>
    </>
  );
};

export default Header;
