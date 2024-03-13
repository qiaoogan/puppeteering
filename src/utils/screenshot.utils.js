const screenshotConfig = require("../configs/screenshot.config");

const customerScreenSavePath = (name, prefix, suffix) => {
    let savePath = screenshotConfig.screenshotSavePath + "/";
    if (prefix) {
        savePath += prefix + "." + name;
    } else {
        savePath += name;
    }

    if (suffix) {
        savePath += "." + suffix + ".png";
    } else {
        savePath += ".png";
    }
    return savePath;
};

const fullPageScreenshot = async (page, name, prefix=null, suffix=null) => {
    await page.screenshot({ path: customerScreenSavePath(name, prefix, suffix), fullPath: true });
};

const elementScreenshot = async (page, selector, name, prefix=null, suffix=null) => {
    let element = await page.waitForSelector(selector);
    await element.screenshot({ path: customerScreenSavePath(name, prefix, suffix) });
};

module.exports = {
    fullPageScreenshot,
    elementScreenshot,
};