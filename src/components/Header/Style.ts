const tw = (classes: string) => classes;

export const purpleText = tw("text-purple-500");

export const klonerTextDiv = tw("pb-2 text-3xl pr-1 pl-1");

export const headerContainer = tw(
  "flex justify-center mb-20 px-4 w-fit mx-auto"
);

export const darkModeButtonHover = tw("hover:rotate-360 duration-1000");
export const darkModeButtonStyle = tw(
  "!border-none !shadow-none w-7! h-6 mt-1 object-contain filter hover:cursor-pointer dark:invert mr-0!"
);

export const headerDiv = tw(
  "flex justify-center border-b-1 pt-3 mx-auto dark:text-white max-w-screen-lg w-full"
);

// HEADER LINKS
export const headerLinkText = tw(
  "hover:text-purple-500 hover:cursor-pointer hover:scale-115 text-xl"
);

export const hamburgerIconStyle = tw(
  "!border-none !shadow-none hover:cursor-pointer dark:invert !m-0 !w-6 !max-w-6"
);

export const buttonStyle = tw("ml-4 mr-4 mt-2");

export const headerLinkDiv = tw(
  "flex gap-4 justify-center items-center text-lg mt-1 ml-4 mr-4"
);

export const mobileStyle = tw(
  "flex flex-row justify-center items-center absolute top-15 left-0 right-0 bg-white dark:bg-neutral-800 gap-5 text-xl w-full mt-1 z-50"
);

// TOGGLE THEME
export const themeButtonStyle = tw("w-full pl-0 mt-1");
