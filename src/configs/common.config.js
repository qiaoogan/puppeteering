const testEnv = require("../utils/argument.utils").testEnv();

const configSetup = {
    local: {
        url: "http://localhost:8331",
    },

    qa: {
        url: "http://localhost:8331",
    },

    uat: {
        url: "http://localhost:8331",
    },

    cloud: {
        url: "http://123.60.93.173",
    }
};

module.exports = configSetup[testEnv];