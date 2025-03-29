import { navigateNewTab, navigateTo } from "../../utils/navigate";
import hamburgerIcon from "../../assets/icons/hamburger.png";
import { useState } from "react";

type HeaderLinks = {
  isMobile: boolean;
};

const HeaderLinks = ({ isMobile }: HeaderLinks) => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState<boolean>(false);

  const mobileMenuClick = () => {
    mobileMenuClicked
      ? setMobileMenuClicked(false)
      : setMobileMenuClicked(true);
  };

  return (
    <div>
      {!isMobile ? (
        <div className="flex gap-4 justify-center items-center text-lg mt-2 pl-20">
          <a
            className="hover:text-purple-500 hover:cursor-pointer hover:scale-115"
            onClick={() => navigateTo("/")}
          >
            [home]
          </a>
          |
          <a
            className="hover:text-purple-500 hover:cursor-pointer hover:scale-115"
            onClick={() => navigateTo("about-me")}
          >
            [about-me]
          </a>
          |
          <a
            className="hover:text-purple-500 hover:cursor-pointer hover:scale-115"
            onClick={() => navigateNewTab("https://github.com/Klon3r")}
          >
            [github]
          </a>
        </div>
      ) : (
        <div className="flex">
          <button className="w-8 h8 mr-8" onClick={mobileMenuClick}>
            <img
              className="!border-none !shadow-none w-7 h-7 mt-1 object-contain filter hover:cursor-pointer dark:invert"
              src={hamburgerIcon}
            />
          </button>
          {mobileMenuClicked && (
            <ul className="flex flex-row justify-center items-center fixed top-15 transform -translate-x-1/2 left-1/2 bg-white dark:bg-gray-800 gap-5 text-xl w-fit mt-1">
              <li
                className="hover:text-purple-500 hover:cursor-pointer hover:scale-115"
                onClick={() => navigateTo("/")}
              >
                [home]
              </li>
              <li
                className="hover:text-purple-500 hover:cursor-pointer hover:scale-115"
                onClick={() => navigateTo("about-me")}
              >
                [about-me]
              </li>
              <li
                className="hover:text-purple-500 hover:cursor-pointer hover:scale-115"
                onClick={() => navigateNewTab("https://github.com/Klon3r")}
              >
                [github]
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderLinks;
