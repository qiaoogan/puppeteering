//import puppeteer from "puppeteer-core";
const puppeteer = require('puppeteer-core')

let browser;
let page;

beforeAll(async ()=>{
    browser = await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    page = await browser.newPage();
    await page.goto("http://hw.dogger.instance/dashboard");
    await page.setViewport({width: 1920, height: 1080});
    
})

afterAll(async () =>{
    await browser.close();
})

test("test with puppeteer",(async () =>{

    const dashboardSelector = "button[value='expenses']";
    await page.waitForSelector(dashboardSelector);
    await page.screenshot({path: 'beforeClick.png'})
    await page.click(dashboardSelector);
    await page.screenshot({path: 'afterClicked.png'})
    
    const textSelector = "p.mb-0";
    const totalIncomeElement = await page.waitForSelector(textSelector, { visible: true });
    const totalIncomeText = await page.evaluate(element => element.textContent, totalIncomeElement);
    expect(totalIncomeText).toContain("Total Expenses");
    
}))

test("test login", (async () =>{
    const loginSelector = "#app > div > div > div > aside > ul > li:nth-child(4) > a";
    const logins = await page.waitForSelector(loginSelector);
    console.log("login:", logins)
    
    await page.click(loginSelector);
    
    const emailSelector = '[type="email"]';
    const passwordSelector =  '[type="password"]';

    await page.waitForSelector(emailSelector)
    await page.type(emailSelector, 'john@abc.com')

    await page.waitForSelector(passwordSelector)
    await page.type(passwordSelector, '123456')

    await page.screenshot({path: "beore_login.png"})

    const loginButtonSelector = "#app > div > div > div > div > div > div:nth-child(4) > form > div > div:nth-child(2) > button"
    await page.click(loginButtonSelector)

    const loginSuccessSelector = "#app > div > div > div > div.layout-content-wrapper > main > div > div > div:nth-child(1) > div > div.v-row.v-row--no-gutters > div.v-col-sm-8.order-sm-1.v-col-12.order-2 > div.v-card-item > div > div"
    const loginSuccess = await page.waitForSelector(loginSuccessSelector)
    console.log("testing",loginSuccess)
    const successText = await page.evaluate(element => element.textContent, loginSuccess);


    expect(successText).toContain('Congratulations')
    
}))




