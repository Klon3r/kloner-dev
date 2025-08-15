import { navigateNewTab, navigateTo } from "@/utils/navigate";
import hamburgerIcon from "../../assets/icons/hamburger.png";
import { useState } from "react";
import CardHover from "../CardHover/CardHover";
import { Button } from "../ui/button";

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

const HeaderLinksDesktop = () => {
  const handleHomeClick = () => {
    navigateTo("/");
  };

  const linkButtonStyle =
    "dark:text-white hover:text-primary! text-black text-lg m-0 p-0 hover:text-primary text-lg!";

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
          linkName="Github"
          buttonClassName={linkButtonStyle}
          onClick={() => navigateNewTab("https://github.com/Klon3r")}
          heading="@Klon3r"
          text="Curious about my code? Explore my GitHub profile and see what I'm building!"
          avatarImage="https:www.github.com/github.png"
          avatarFallback="GH"
          alt="@github"
        />
      </div>
      <div>|</div>
      <div>
        <Button variant="link" className={linkButtonStyle}>
          about-me
        </Button>
      </div>
    </div>
  );
};

export default Links;
