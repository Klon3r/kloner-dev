import { navigateNewTab, navigateTo } from "../../utils/navigate";
import hamburgerIcon from "../../assets/icons/hamburger.png";
import { useState } from "react";
import AboutMe from "./AboutMe/AboutMe";
import {
  buttonStyle,
  hamburgerIconStyle,
  headerLinkDiv,
  headerLinkText,
  mobileStyle,
} from "./Style";

type HeaderLinks = {
  isMobile: boolean;
};

const HeaderLinks = ({ isMobile }: HeaderLinks) => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const mobileMenuClick = () => {
    mobileMenuClicked
      ? setMobileMenuClicked(false)
      : setMobileMenuClicked(true);
  };

  const aboutMeOnClick = () => {
    isAboutMeOpen ? setIsAboutMeOpen(false) : setIsAboutMeOpen(true);
  };

  const aboutMeOnClose = () => {
    setIsAboutMeOpen(false);
  };

  return (
    <div>
      <AboutMe
        isOpen={isAboutMeOpen}
        onClose={aboutMeOnClose}
        isMobile={isMobile}
      />
      {isMobile ? (
        <div className="flex">
          <button className={buttonStyle} onClick={mobileMenuClick}>
            <img className={hamburgerIconStyle} src={hamburgerIcon} />
          </button>
          {mobileMenuClicked && (
            <ul className={mobileStyle}>
              <li className={headerLinkText} onClick={() => navigateTo("/")}>
                home
              </li>
              |
              <li className={headerLinkText} onClick={aboutMeOnClick}>
                about-me
              </li>
              |
              <li
                className={headerLinkText}
                onClick={() => navigateNewTab("https://github.com/Klon3r")}
              >
                github
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div className={headerLinkDiv}>
          <a className={headerLinkText} onClick={() => navigateTo("/")}>
            home
          </a>
          |
          <a className={headerLinkText} onClick={aboutMeOnClick}>
            about-me
          </a>
          |
          <a
            className={headerLinkText}
            onClick={() => navigateNewTab("https://github.com/Klon3r")}
          >
            github
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderLinks;
