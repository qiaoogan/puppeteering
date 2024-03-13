const DashboardPage = require("../pages/Dashboard.page");
const elementUtils = require("../utils/element.utils");
const screenshotUtils = require("../utils/screenshot.utils");

const testCongratsDisplayed = async (page, expect) => {
    const dashboardPage = new DashboardPage(page);
    const congratsLabel = await elementUtils.elementContent(page, dashboardPage.elements.congratsLabel);
    await screenshotUtils.fullPageScreenshot(page, 'dashboard-page');
    await expect(congratsLabel).toMatch("Congratulations John! 🎉");
};

const testClickViewBadgesSucceed = async (page, expect) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.actions.clickViewBadgesButton();
};

module.exports = {
    testCases: [
        {
            caseFunction: testCongratsDisplayed,
            caseTags: ["regression", "smoke"],
            caseDescription: "test congrats label displayed",
        },
        {
            caseFunction: testClickViewBadgesSucceed,
            caseTags: ["regression", "smoke"],
            caseDescription: "test click 'view badges' button succeed",
        },
    ],
};