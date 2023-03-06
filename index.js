const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.get('/ss', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://google.com');
  const buffer = await page.screenshot();
  
  await browser.close();
  
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length
  });
  res.end(buffer);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
