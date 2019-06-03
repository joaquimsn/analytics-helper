const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/index.html');
    await page.screenshot({ path: 'teste-puppeteer.png' });

    await browser.close();
})();