import { test, expect } from "@playwright/test";

const website: string = "http://localhost:5173/terminal";

test.describe("Check website", () => {
  test.skip("Check title", async ({ page }) => {
    await page.goto(website);
    await expect(page).toHaveTitle(/kloner/);
  });
});

test.describe("Checking terminal commands", () => {
  let commandInput;
  let outputDiv;

  test.beforeEach(async ({ page }) => {
    await page.goto(website);

    // Init the command input and output divs
    commandInput = page.getByTitle("command-input");
    outputDiv = page.getByTitle("terminal-body");

    await commandInput.fill("clear");
    await commandInput.press("Enter");
  });

  test.skip("Check 'help' command", async ({ page }) => {
    // Enter command
    await commandInput.fill("help");
    await commandInput.press("Enter");

    // Check output
    await expect(outputDiv).toContainText("List of Commands:");
    await expect(outputDiv).toContainText("about-me,  email,  skills,  clear");
  });

  test.skip("Check about-me command", async ({ page }) => {
    // Enter command
    await commandInput.fill("about-me");
    await commandInput.press("Enter");

    // Check output
    await expect(outputDiv).toContainText(
      "Hello, my name is Keiran Bunyan. I am a passionate web developer who loves programming and problem-solving. I thrive on the challenge of turning problems into ele"
    );
  });
  test.skip("Check skills command", async ({ page }) => {
    // Enter command
    await commandInput.fill("skills");
    await commandInput.press("Enter");

    // Check output
    await expect(outputDiv).toContainText("HTML, CSS, JavaScript");
    await expect(outputDiv).toContainText("React, Python, SQL");
    await expect(outputDiv).toContainText("Git/GitHub,CI/CD, Testing, Linux");
  });
});
