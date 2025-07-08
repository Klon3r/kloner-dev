import { useEffect, useState } from "react";
import DarkModeToggleButton from "./DarkModeToggleButton";
import HeaderLinks from "./HeaderLinks";
import { headerContainer, headerDiv, klonerTextDiv, purpleText } from "./Style";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
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
      <div className={headerContainer}>
        <div className={headerDiv}>
          <h3 className={klonerTextDiv}>
            <span className={purpleText}>kloner</span>
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
