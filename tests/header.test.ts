import { test, expect } from "@playwright/test";
import { getAge } from "../src/utils/time";

const headerLinks = ["home", "github", "about me"];
const themeColors = ["Red", "Blue", "Violet", "Green", "Yellow", "Orange"];
const age = getAge();

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

test("check github link", async ({ page }) => {
  const newTabPromise = page.waitForEvent("popup");

  await page.getByRole("button", { name: "github" }).click();

  const newTab = await newTabPromise;
  await newTab.waitForLoadState();

  await expect(newTab).toHaveURL("https://github.com/Klon3r");
});

test("check about me", async ({ page }) => {
  await page.getByRole("button", { name: "about me" }).click();

  const aboutMeHeader = page.getByRole("heading", { name: "About Me" });
  const aboutMePhoto = page.getByTestId("about-me-image");
  const aboutMeQuote = page.getByTestId("about-me-quote");
  const aboutMeList = page.getByTestId("about-me-list");

  await expect(aboutMeHeader).toBeVisible();
  await expect(aboutMePhoto).toBeVisible();
  await expect(aboutMeQuote).toBeVisible();
  await expect(aboutMeList).toBeVisible();

  await expect(aboutMeList).toContainText("Keiran Bunyan");
  await expect(aboutMeList).toContainText(String(age));
  await expect(aboutMeList).toContainText("He/Him");
  await expect(aboutMeList).toContainText("Brisbane");
  await expect(aboutMeList).toContainText("Software Developer");
  await expect(aboutMeList).toContainText("I use Arch btw");

  // Check about me closes
  await page.getByRole("button", { name: "Close" }).click();

  await expect(aboutMeHeader).not.toBeVisible();
  await expect(aboutMePhoto).not.toBeVisible();
  await expect(aboutMeQuote).not.toBeVisible();
  await expect(aboutMeList).not.toBeVisible();
});

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
