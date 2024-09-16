import { test, expect } from "@playwright/test";

const website: string = "http://localhost:5173/";

test.describe("Check website title/images", () => {
  test("Check title", async ({ page }) => {
    await page.goto(website);
    await expect(page).toHaveTitle(/Kloner/);
  });

  test("Check images have alt text", async ({ page }) => {
    await page.goto(website);

    // Get images then check
    const photoOfMe = await page.getByTitle("photo-of-me");
    const githubLogo = await page.getByTitle("github-logo");

    // Check the alt attribute
    await expect(photoOfMe).toHaveAttribute("alt", "Photo of me");
    await expect(githubLogo).toHaveAttribute("alt", "GitHub Logo");
  });

  test("Check GitHub logo goes to the correct URL", async ({ page }) => {
    await page.goto(website);

    const [newPage] = await Promise.all([
      page.waitForEvent("popup"), // Wait for the new page popup
      page.getByTitle("github-logo").click({ force: true }),
    ]);
    await expect(newPage).toHaveURL("https://github.com/Klon3r");
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

  test("Check 'help' command", async ({ page }) => {
    // Enter command
    await commandInput.fill("help");
    await commandInput.press("Enter");

    // Check output
    await expect(outputDiv).toContainText("List of Commands:");
    await expect(outputDiv).toContainText("about-me,  email,  skills,  clear");
  });

  test("Check about-me command", async ({ page }) => {
    // Enter command
    await commandInput.fill("about-me");
    await commandInput.press("Enter");

    // Check output
    await expect(outputDiv).toContainText(
      "Hello, my name is Keiran Bunyan. I am a passionate web developer who loves programming and problem-solving. I thrive on the challenge of turning problems into ele"
    );
  });
  test("Check skills command", async ({ page }) => {
    // Enter command
    await commandInput.fill("skills");
    await commandInput.press("Enter");

    // Check output
    await expect(outputDiv).toContainText("HTML, CSS, JavaScript");
    await expect(outputDiv).toContainText("React, Python, SQL");
    await expect(outputDiv).toContainText("Git/GitHub,CI/CD, Testing, Linux");
  });
});
