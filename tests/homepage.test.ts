import { test, expect } from "@playwright/test";

const cardTitles = ["Countdown", "The Completion Hall", "Terminal Klone"];
const cardUrl = ["timer", "games", "terminal"];

const newCard = cardTitles[cardTitles.length - 1];

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has website title 'kloner.dev'", async ({ page }) => {
  await expect(page).toHaveTitle(/kloner.dev/);
});

test("renders correct card titles", async ({ page }) => {
  for (const cardTitle of cardTitles) {
    const card = page.getByRole("heading", { name: cardTitle });
    await expect(card).toBeVisible();
  }
});

test("has correct new card icon", async ({ page }) => {
  const card = page.getByRole("heading", { name: newCard });
  await expect(card).toContainText("new");
});

test("all cards go to correct url when clicked", async ({ page }) => {
  for (const cardTitle of cardTitles) {
    await page.goto("/");

    const card = page.getByRole("heading", { name: cardTitle });
    const cardIndex = cardTitles.indexOf(cardTitle);
    await card.click();

    expect(page.url()).toContain(cardUrl[cardIndex]);
  }
});
