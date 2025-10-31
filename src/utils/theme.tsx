export const getThemeFromLocalStorage = () => {
  const themeColor = localStorage.getItem("theme-color");

  if (!themeColor) return "violet"; // default theme color

  return themeColor;
};

export const setThemeInLocalStorage = (theme: string) => {
  if (!theme) return;
  localStorage.setItem("theme-color", theme);
};

export const setColorTheme = (theme: string) => {
  const root = document.documentElement;

  // Add standard .dark class for Tailwind
  root.classList.add("dark");

  removeColorThemes();

  switch (theme) {
    case "violet":
      root.classList.add("theme-violet");
      break;
    case "red":
      root.classList.add("theme-red");
      break;
    case "orange":
      root.classList.add("theme-orange");
      break;
    case "green":
      root.classList.add("theme-green");
      break;
    case "blue":
      root.classList.add("theme-blue");
      break;
    case "yellow":
      root.classList.add("theme-yellow");
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
    "theme-yellow"
  );
};
