import { createPortal } from "react-dom";
import AboutMeModal from "./AboutMeModal";

type AboutMeType = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};

const AboutMe = ({ isOpen, onClose, isMobile }: AboutMeType) => {
  return (
    <div>
      {isOpen &&
        createPortal(
          <AboutMeModal onClose={onClose} isMobile={isMobile} />,
          document.body
        )}
    </div>
  );
};

export default AboutMe;
