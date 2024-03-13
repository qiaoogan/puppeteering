const commandArguments = require("./argument.utils");
// const setupJestScreenshot = require("jest-screenshot").setupJestScreenshot;

const testLevel = commandArguments.testLevel();

const executing = (testCases, testFunctionTransporter) => {
    testCases.testCases.forEach(testCase => {
        if (testCase.caseTags.includes(testLevel)) {
            if (testCase.caseTags.includes("skip")) {
                test.skip(testCase.caseDescription, () => testFunctionTransporter(testCase));
            } else {
                test(testCase.caseDescription, () => testFunctionTransporter(testCase));
            }
        }
    });
};

const setupAndTeardown = (setupTransporter, teardownTransporter) => {
    beforeAll(setupTransporter);
    afterAll(teardownTransporter);
    // setupJestScreenshot();
};

const describeExecuting = (describeDescription, testCases, testSetupTransporter, testFunctionTransporter) => {
    describe(describeDescription, () => {
        beforeEach(testSetupTransporter);
        executing(testCases, testFunctionTransporter);
    });
};

module.exports = {
    setupAndTeardown,
    describeExecuting,
};