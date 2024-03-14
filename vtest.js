const { newBuild } = require("micooc");

async function test() {
  const host = "http://hw.piggy.instance:8123/engine";
  const apiKey = "AK034980b1d005f80ad0";
  const pid = "PID4d51b7b7175d4ef4a46157ef41a0fd12";
  const buildVersion = process.env.VTEST_BUILD_VERSION ? process.env.VTEST_BUILD_VERSION : "FKafc0478af24af2da45fa19ddd06c17dd5d0d45";
  const screenshotDirectory = "./test-results/test-screenshots";

  await newBuild(host, apiKey, pid, buildVersion, screenshotDirectory);
}

test();