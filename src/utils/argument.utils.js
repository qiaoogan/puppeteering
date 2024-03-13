// testLevel=(smoke|regression)
const testLevelString = "testLevel";

// testEnv=(local|qa)
const testEnvString = "testEnv";

const testLevel = () => {
    return process.env[testLevelString];
};

const testEnv = () => {
    return process.env[testEnvString];
};

module.exports = {
    testLevel,
    testEnv,
};