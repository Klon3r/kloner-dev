export const navigateTo = (url: string): void => {
  window.location.href = url;
};

export const navigateNewTab = (url: string): void => {
  window.open(url, "_blank");
};
