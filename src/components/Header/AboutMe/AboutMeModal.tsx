import { useState } from "react";
import mePhoto from "../../../assets/photo-me-cropped.png";
import { getAge } from "../../../utils/getAge";
import closeButtonIcon from "../../../assets/icons/close.png";

type AboutMeModalType = {
  onClose: () => void;
  isMobile: boolean;
};

const AboutMeModal = ({ onClose, isMobile }: AboutMeModalType) => {
  const [showCloseButtonIcon, setShowCloseButtonIcon] = useState(false);

  const age = getAge();

  const closeButtonMouseHandle = (mouseEnter: boolean) => {
    if (mouseEnter) {
      setShowCloseButtonIcon(true);
    } else {
      setShowCloseButtonIcon(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]" onClick={onClose} />
      <div className="fixed top-30 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-100 dark:bg-[#363636] justify-center w-fit m-auto dark:text-white shadow-2xl rounded-lg">
          <div className="bg-gray-300 dark:bg-gray-100 rounded-t-lg h-6 justify-center content-center flex">
            <div
              className="bg-red-500 w-4 h-4 rounded-full ml-1 hover:cursor-pointer relative flex overflow-hidden my-auto"
              onMouseEnter={() => closeButtonMouseHandle(true)}
              onMouseLeave={() => closeButtonMouseHandle(false)}
            >
              {showCloseButtonIcon && (
                <img
                  className="w-full h-full object-contain border-none! shadow-none! p-1"
                  onClick={onClose}
                  src={closeButtonIcon}
                />
              )}
            </div>
            <div className="mx-auto text-black">About Me</div>
          </div>
          <div
            className={`flex p-5 content-center ${
              isMobile ? "flex-col" : "flex-row"
            } `}
          >
            {/* Left Side */}
            <div className={`flex ${isMobile ? "flex-row" : "flex-col"}`}>
              <img
                src={mePhoto}
                className="rounded-full mx-auto border-1 shadow-none!"
              />
              <div className="text-left flex-wrap w-45">
                <ul>
                  <li>{age}</li>
                  <li>he/him</li>
                  <li>
                    <a
                      href="http://www.google.com/maps/place/Brisbane+QLD/"
                      target="_blank"
                      className="underline text-blue-600 dark:text-blue-400"
                    >
                      Brisbane
                    </a>
                  </li>
                  <li>I use Arch btw</li>
                  <li>Software Developer</li>
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div
              className={`flex flex-col justify-start w-75 ${
                isMobile ? "" : "ml-10"
              }`}
            >
              <h1 className={`text-3xl mb-5 ${isMobile ? "mt-5" : ""}`}>
                Keiran Bunyan
              </h1>
              <p className="flex-wrap mb-5 italic text-sm">
                "One day I challenged myself to learn web development and ended
                up falling in love with it."
              </p>

              <p className="flex-wrap text-sm">
                <ul className="list-disc mx-4">
                  <li>I love all things programming, gaming & linux</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeModal;
