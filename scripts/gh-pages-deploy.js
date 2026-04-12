/* eslint-disable no-console */
const execaModule = require("execa");
const execa =
  typeof execaModule === "function"
    ? execaModule
    : execaModule.execa;
const fs = require("fs");
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    console.log("Pushed to gh-pages...")
    fs.rmSync(folderName, { recursive: true, force: true });
    console.log("dist folder deleted...")
    await execa("git", ["checkout", "main"]);
    console.log("Successfully checkout of main branch...")
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("gh-pages branch deleted...")
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();