import { navigateTo } from "@/utils/navigate";
import { Separator } from "@/components/ui/separator";
import Links from "./Links";
import { useEffect, useState } from "react";
import ThemeSelectorDropdown from "./ThemeSelectorDropdown";

const HeaderBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleLogoClick = () => {
    navigateTo("/");
  };

  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkMobileDevice();

    window.addEventListener("resize", checkMobileDevice);
    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  return (
    <div>
      <div className="flex min-w-60 m-auto pt-2 flex-col mb-15">
        <div className="flex justify-center flex-row">
          <h3 className="text-3xl mr-4">
            <span
              className="text-primary hover:cursor-pointer"
              onClick={handleLogoClick}
            >
              kloner
            </span>
            .dev
          </h3>
          <Links isMobile={isMobile} />
          <ThemeSelectorDropdown />
        </div>
        <Separator decorative />
      </div>
    </div>
  );
};

export default HeaderBar;
