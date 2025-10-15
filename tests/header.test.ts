import { test, expect } from "@playwright/test";

const headerLinks = ["home", "github", "about me"];
const themeColors = ["Red", "Blue", "Violet", "Green", "Yellow", "Orange"];

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has 'kloner.dev' header title", async ({ page }) => {
  const headerTitle = page.getByRole("heading", { name: "kloner.dev" });
  await expect(headerTitle).toBeVisible();
});

test("has header buttons", async ({ page }) => {
  for (const link of headerLinks) {
    const button = page.getByRole("button", { name: link });
    await expect(button).toBeVisible();
  }
});

// TODO: Github Check
// TODO: About Me Check

// ============
//    THEME
// ============

test("has theme button", async ({ page }) => {
  const themeButton = page.getByTestId("theme-selector");
  await expect(themeButton).toBeVisible();
});

test("has theme colors", async ({ page }) => {
  const themeButton = page.getByTestId("theme-selector");
  await themeButton.click();

  const themeColorContainer = page.getByTestId("theme-container");
  await expect(themeColorContainer).toContainText("Theme color");

  for (const color of themeColors) {
    await expect(themeColorContainer).toContainText(color);
  }
});

test("has dark/light mode", async ({ page }) => {
  const themeButton = page.getByTestId("theme-selector");
  await themeButton.click();

  const themeColorContainer = page.getByTestId("theme-container");
  await expect(themeColorContainer).toContainText("Dark mode");
  await expect(themeColorContainer).toContainText("On");
  await expect(themeColorContainer).toContainText("Off");
});
