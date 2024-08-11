"use strict";

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  

  const executablePath = browser.process().spawnfile;
  console.log("Chrome executable path:", executablePath);



  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({
    path: 'hn.png',
  });

  await browser.close();
})();
