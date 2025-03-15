export interface Theme {
  backgroundColor: string;
  textColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

export const lightTheme: Theme = {
  backgroundColor: "#E6DFF1", // Light Lavender
  textColor: "#3E1F56", // Deep Purple
  buttonBackgroundColor: "#A569BD", // Bright Purple
  buttonTextColor: "#FFFFFF", // White
};

export const darkTheme: Theme = {
  backgroundColor: "#2B1B3D", // Dark Purple
  textColor: "#DCC6E0", // Soft Lavender White
  buttonBackgroundColor: "#8E44AD", // Vibrant Purple
  buttonTextColor: "#2B1B3D", // Dark Purple
};
