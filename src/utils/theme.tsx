export const checkThemeInBrowser = (
  setUseState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    toggleTheme(setUseState);
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

export const setTheme = (isDarkMode: boolean) => {
  if (isDarkMode) document.documentElement.classList.add("dark");
};
