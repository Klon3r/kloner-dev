export const checkThemeInBrowser = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  } else {
    return false;
  }
};

export const toggleTheme = (
  setUseState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setUseState((prev) => {
    const next = !prev;
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return next;
  });
};

export const setTheme = (isDarkMode: boolean, theme: string) => {
  if (isDarkMode) document.documentElement.classList.add(`dark-theme-${theme}`);
};

export const setColorTheme = (theme: string, isDarkMode: boolean) => {
  const root = document.documentElement;

  // Add standard .dark class for Tailwind
  if (isDarkMode) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  removeColorThemes();

  switch (theme) {
    case "violet":
      root.classList.add(isDarkMode ? "dark-theme-violet" : "theme-violet");
      break;
    case "red":
      root.classList.add(isDarkMode ? "dark-theme-red" : "theme-red");
      break;
    case "orange":
      root.classList.add(isDarkMode ? "dark-theme-orange" : "theme-orange");
      break;
    case "green":
      root.classList.add(isDarkMode ? "dark-theme-green" : "theme-green");
      break;
    case "blue":
      root.classList.add(isDarkMode ? "dark-theme-blue" : "theme-blue");
      break;
    case "yellow":
      root.classList.add(isDarkMode ? "dark-theme-yellow" : "theme-yellow");
      break;
  }
};

const removeColorThemes = () => {
  const root = document.documentElement;
  root.classList.remove(
    "theme-red",
    "theme-violet",
    "theme-orange",
    "theme-green",
    "theme-blue",
    "theme-yellow",
    "dark-theme-red",
    "dark-theme-violet",
    "dark-theme-orange",
    "dark-theme-blue",
    "dark-theme-green",
    "dark-theme-yellow"
  );
};
