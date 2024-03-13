const AccountSettingPage = require("../pages/AccountSetting.page");
const elementUtils = require("../utils/element.utils");
const screenshotUtils = require("../utils/screenshot.utils");

const testSaveNewAccountInfo = async (page, expect) => {
    const accountSettingPage =  new AccountSettingPage(page);
    await page.waitForSelector(accountSettingPage.elements.firstNameField);

    await screenshotUtils.fullPageScreenshot(page, 'account-setting');

    const firstNameToVerify = "test-firstName";
    await accountSettingPage.actions.inputFirstName(firstNameToVerify);
    await accountSettingPage.actions.inputLastName("lastName");
    
    await accountSettingPage.actions.clickSaveButton();

    await page.reload();
    
    await page.waitForSelector(accountSettingPage.elements.firstNameField);
    await screenshotUtils.fullPageScreenshot(page, 'account-setting-reloaded');

    const firstName = await elementUtils.elementValue(page, accountSettingPage.elements.firstNameField);
    expect(firstName).toBe(firstNameToVerify);
}

const testResetAccountInfoChange = async (page, expect) => {
    const accountSettingPage =  new AccountSettingPage(page);

    const fn = await elementUtils.elementValue(page, accountSettingPage.elements.firstNameField);
    const ln = await elementUtils.elementValue(page, accountSettingPage.elements.lastNameField);

    await accountSettingPage.actions.inputFirstName("aaaa");
    await accountSettingPage.actions.inputLastName("bbbb");
    
    await accountSettingPage.actions.clickResetButton();

    await page.reload();

    const fn_after = await elementUtils.elementValue(page, accountSettingPage.elements.firstNameField);
    const ln_after = await elementUtils.elementValue(page, accountSettingPage.elements.lastNameField);

    expect(fn).toBe(fn_after);
    expect(ln).toBe(ln_after);

}

module.exports = {
    testCases: [
        {
            caseFunction: testSaveNewAccountInfo,
            caseTags: ["regression", "smoke", "accountSettings"],
            caseDescription: "test change account information",
        },
        {
            caseFunction: testResetAccountInfoChange,
            caseTags: ["regression", "smoke", "accountSettings"],
            caseDescription: "test reset account modification",
        },
    ],
};