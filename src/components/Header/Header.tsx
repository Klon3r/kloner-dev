import { useEffect, useState } from "react";
import DarkModeToggleButton from "./DarkModeToggleButton";
import HeaderLinks from "./HeaderLinks";
import { headerContainer, headerDiv, klonerTextDiv, purpleText } from "./Style";
import { checkThemeInBrowser, setTheme, toggleTheme } from "../../utils/theme";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkThemeInBrowser(setIsDarkMode);
    checkMobileDevice();
    setTheme(isDarkMode);

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
          <DarkModeToggleButton
            onClick={() => toggleTheme(setIsDarkMode)}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
