import { test, expect } from "@playwright/test";

const website: string = "http://localhost:5173/";

test.describe("Check website", () => {
  test("Check title", async ({ page }) => {
    await page.goto(website);

    await expect(page).toHaveTitle(/Kloner/);
  });

  test("Check alt text", async ({ page }) => {
    await page.goto(website);
    await expect(page.getByRole("img")).toHaveAttribute("alt");
  });
});

test.describe("Check Links", () => {
  test("Check email", async ({ page }) => {
    await page.goto(website);
    await expect(page.getByText("Email")).toHaveAttribute(
      "href",
      /mailto:bunyan.keiran@gmail.com/
    );
  });
  test("Check GitHub", async ({ page }) => {
    await page.goto(website);
    await page.getByRole("link", { name: "GitHub" }).click({ force: true });
    await expect(page).toHaveURL("https://github.com/Klon3r");
  });
});
