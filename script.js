const { exec } = require("child_process");

const words = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "frog",
  "giraffe",
  "house",
  "ice cream",
  "jungle",
  "koala",
  "lemon",
  "mango",
  "ninja",
  "octopus",
  "penguin",
  "queen",
  "rabbit",
  "sunflower",
  "tiger",
  "umbrella",
  "volcano",
  "waterfall",
  "xylophone",
  "yacht",
  "zebra",
  "astronomy",
  "beauty",
  "chemistry",
  "drama",
  "economics",
  "fashion",
  "geography",
  "history",
  "internet",
  "jazz",
  "kangaroo",
];

async function openTabs() {
  for (const word of words) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 1 second
    exec(`start microsoft-edge:https://www.bing.com/search?q=${word}`);
  }
}

async function main() {
  await openTabs();
}

main();
