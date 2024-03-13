const puppeteer = require("puppeteer");
const commonConfig = require("../configs/common.config");
const puppeteerConfig = require("../configs/puppeteer.config");
const testCases = require('../cases');
const executingUtils = require("../utils/executing.utils");

//===========================================================================
// No need to modify below setup.
//===========================================================================
let page, browser;

const topSetupTransporter = async () => {
    browser = await puppeteer.launch(puppeteerConfig.launchOptions);
    page = await browser.newPage();
    await page.setViewport(puppeteerConfig.viewPortOptions);
};
const topTeardownTransporter = async () => await browser.close();
executingUtils.setupAndTeardown(topSetupTransporter, topTeardownTransporter);

//===========================================================================
// No need to modify below transporters.
//===========================================================================
const testSetupTransporter = async () => await page.goto(commonConfig.url + '/account-settings');
const testFunctionTransporter = testCase => testCase.caseFunction(page, expect);

//===========================================================================
// Only change describeDescription and testCase when create new spec file.
//===========================================================================
executingUtils.describeExecuting(
    "test account setting page",
    testCases.accountSettingTestCases,
    testSetupTransporter,
    testFunctionTransporter
);