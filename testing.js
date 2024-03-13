import puppeteer from "puppeteer-core";

(async () =>{
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    const page = await browser.newPage();
    await page.goto("http://hw.dogger.instance/dashboard");
    await page.setViewport({width: 1080, height: 1024});
    const dashboardSelector = "button[value='expenses']";
    await page.waitForSelector(dashboardSelector);
    await page.screenshot({path: 'beforeClick.png'})
    await page.click(dashboardSelector);
    await page.screenshot({path: 'afterClicked.png'})

    
    await browser.close();
})();



