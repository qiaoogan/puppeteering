#!/bin/bash
set -e

image="qiaoogan/testexeteer:0.0.1"

docker container run --rm \
  --add-host hw.dogger.instance:123.60.93.173 \
  --user 0  \
  --mount type=bind,source="$(pwd)",target=/home/pptruser \
  -e testLevel="smoke" \
  -e testEnv="cloud" \
  -e VTEST_BUILD_VERSION="$BUILD_NUMBER" \
  $image \
  node /home/pptruser/vtest.js