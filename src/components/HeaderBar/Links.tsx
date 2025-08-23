import { navigateNewTab, navigateTo } from "@/utils/navigate";
import hamburgerIcon from "../../assets/icons/hamburger.png";
import { useState } from "react";
import CardHover from "../CardHover/CardHover";
import { Button } from "../ui/button";
import githubIcon from "../../assets/icons/github.png";
import AboutMe from "../AboutMe/AboutMe";
import { linkButtonStyle } from "./Style";
type LinksType = {
  isMobile: boolean;
};

const Links = ({ isMobile }: LinksType) => {
  return <div>{isMobile ? <HeaderLinksMobile /> : <HeaderLinksDesktop />}</div>;
};

const HeaderLinksMobile = () => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  const mobileMenuClick = () => {
    mobileMenuClicked
      ? setMobileMenuClicked(false)
      : setMobileMenuClicked(true);
  };

  const handleHomeClick = () => {
    navigateTo("/");
  };

  return (
    <div className="flex items-center">
      <img
        className="hover:cursor-pointer dark:invert w-6 mt-1.5"
        src={hamburgerIcon}
        onClick={mobileMenuClick}
      />
      {mobileMenuClicked && (
        <div className="flex flex-row justify-center absolute top-12 left-0 right-0 gap-3 items-center">
          <div>
            <Button
              variant="link"
              className={linkButtonStyle}
              onClick={handleHomeClick}
            >
              home
            </Button>
          </div>
          <div>|</div>
          <div>
            <Button
              variant="link"
              className={linkButtonStyle}
              onClick={() => navigateNewTab("https://github.com/Klon3r")}
            >
              github
            </Button>
          </div>
          <div>|</div>
          <div>
            <AboutMe />
          </div>
        </div>
      )}
    </div>
  );
};

const HeaderLinksDesktop = () => {
  const handleHomeClick = () => {
    navigateTo("/");
  };

  return (
    <div className="flex items-center space-x-4">
      <div>
        <Button
          variant="link"
          className={linkButtonStyle}
          onClick={handleHomeClick}
        >
          home
        </Button>
      </div>
      <div>|</div>
      <div>
        <CardHover
          name="github"
          buttonClassName={linkButtonStyle}
          onClick={() => navigateNewTab("https://github.com/Klon3r")}
          heading="@Klon3r"
          text="Curious about my code? Explore my GitHub profile and see what I'm building!"
          avatarImage={githubIcon}
          avatarFallback="GH"
          alt="@github"
          openDelay={200}
          closeDelay={100}
        />
      </div>
      <div>|</div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default Links;
