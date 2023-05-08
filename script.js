const { exec } = require("child_process");
const randomWords = require("random-words");

async function openTabs() {
  const words = randomWords({ min: 3, max: 10, exactly: 34 }); // generate 34 random words with length between 3 and 10
  for (const word of words) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 1 second
    exec(`start microsoft-edge:https://www.bing.com/search?q=${word}`);
  }
}

async function main() {
  await openTabs();
}

main();
