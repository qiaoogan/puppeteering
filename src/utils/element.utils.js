const elementContent = async (page, selector) => {
    const element = await page.waitForSelector(selector);
    return await page.evaluate(element => element.textContent, element);
};

const elementValue = async (page, selector) => {
    const element = await page.waitForSelector(selector);
    return await page.evaluate(element => element.value, element);
};

const elementClearValue = async (page, selector) => {
    const element = await page.waitForSelector(selector);
    await element.click({ clickCount: 3 });
    await page.keyboard.press('Backspace')
};

module.exports = {
    elementContent,
    elementValue,
    elementClearValue
};