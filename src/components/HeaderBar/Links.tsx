import { navigateNewTab, navigateTo } from "@/utils/navigate";
import hamburgerIcon from "../../assets/icons/hamburger.png";
import { useState } from "react";

type LinksType = {
  isMobile: boolean;
};

const Links = ({ isMobile }: LinksType) => {
  return <div>{isMobile ? <HeaderLinksMobile /> : <HeaderLinks />}</div>;
};

const HeaderLinksMobile = () => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  const mobileMenuClick = () => {
    mobileMenuClicked
      ? setMobileMenuClicked(false)
      : setMobileMenuClicked(true);
  };

  const hoverStyle = "hover:text-primary hover:cursor-pointer hover:scale-110";

  return (
    <div className="flex items-center">
      <img
        className="hover:cursor-pointer dark:invert w-6 mt-1.5"
        src={hamburgerIcon}
        onClick={mobileMenuClick}
      />
      {mobileMenuClicked && (
        <div className="flex flex-row justify-center absolute top-13 left-0 right-0 gap-3">
          <div className={hoverStyle} onClick={() => navigateTo("/")}>
            home
          </div>
          <div>|</div>
          <div
            className={hoverStyle}
            onClick={() => navigateNewTab("https://github.com/Klon3r")}
          >
            github
          </div>
          <div>|</div>
          <div className={hoverStyle}>about-me</div>
        </div>
      )}
    </div>
  );
};

const HeaderLinks = () => {
  const handleHomeClick = () => {
    navigateTo("/");
  };

  const hoverStyle = "hover:text-primary hover:cursor-pointer hover:scale-110";

  return (
    <div className="flex items-center space-x-4 py-2">
      <div className={hoverStyle} onClick={handleHomeClick}>
        home
      </div>
      <div>|</div>
      <div
        className={hoverStyle}
        onClick={() => navigateNewTab("https://github.com/Klon3r")}
      >
        github
      </div>
      <div>|</div>
      <div className={hoverStyle}>about-me</div>
    </div>
  );
};

export default Links;
